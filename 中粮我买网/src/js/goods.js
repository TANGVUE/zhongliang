(function () {
    var gid = location.search.slice(1).split('&')[0].split('=')[1];
    var type = decodeURI(location.search.slice(1).split('&')[1].split('=')[1]);
    var count = 1;

    // 侧栏购物车
    var sidekey = true;
    var num = 0;
    $('.sidebar .shop-cart').click(function () {
        if (sidekey) {
            num = 276;
        } else {
            num = 0;
        }
        sidekey = !sidekey;
        $('.sidebar').stop().animate({
            right: num + 'px'
        })
        $('.sidebar-spcart').stop().animate({
            width: num + 'px'
        });
    });


    // 商品详细数据
    $.ajax({
        type: 'get',
        url: '../api/getgoods.php',
        dataType: 'json',
        data: {
            gid,
            type
        },
        success: function (res) {
            if (res.code == 0) {
                $('.sort-list span').eq(2).text(res.goods.g_type);
                $('.sort-list span').eq(4).text(res.goods.g_name);
                magnifier({
                    el: '.magnifier',
                    imgURL: res.goods[0].g_url,
                    width: 150,
                    height: 150,
                    multiple: 2
                });
                var lis = `<li><img src="${res.goods[0].g_url}"></li>`;
                $('.img-list').html(lis);
                $('.goods-name').text(res.goods[0].g_name);
                $('.goods-price .price').text('￥' + res.goods[0].g_price);
                var html = '';
                res.list.forEach(function (goods) {
                    html += `<li class="love-goods" data-id="${goods.g_id}" data-type="${goods.g_type}">
                                <img src="${goods.g_url}" alt="">
                                <p class="name-text">${goods.g_name}</p>
                                <p class="price">￥${goods.g_price}</p>
                            </li>`;
                });

                $('.loves-list').html(html).on('click', 'li', function () {
                    window.open('goods.html?gid=' + $(this).attr('data-id') + '&gtype=' + $(this).attr('data-type'));
                });

                $('.parameter li').eq(0).text('品牌:' + res.goods[0].g_shop);
                $('.parameter li').eq(1).text('商品:' + res.goods[0].g_name);
            }
        }
    });

    // 获取用户信息
    var gu = new GetUser('userid', '.log-reg');
    gu.getData();
    var pro = gu.getCart();
    if (pro) {
        pro.then(function (res) {
            cartRender(res);
        });
    }

    // 渲染侧栏购物车更改购物车数据
    function cartRender(res) {
        var html = '';
        var count = 0;
        var allprice = 0;
        res.orders.forEach(order => {
            count += order.count * 1;
            allprice += order.count * order.g_price;
            html += `<li class="spc-item">
                        <img src="${order.g_url}" alt="">
                        <p class="spc-name">
                            ${order.g_name}
                        </p>
                        <p class="spc-operation">
                            <span class="spc-price">￥${order.g_price}</span>
                            <span class="spc-count"> x ${order.count}</span>
                            <a href="javascript:;" class="spc-del">删除</a>
                        </p>
                    </li>`;
        });
        $('.sidebar-spcart .spcart-list').html(html);
        $('.cart-count').text(count);
        $('.sidebar-spcart .pay-count').text('总共' + count + '件');
        $('.sidebar-spcart .pay-price').text('￥' + allprice);

        return {
            count,
            allprice
        }
    }

    $('.count').val(count);

    $('.add').click(function () {
        count += 1;
        $('.count').val(count);
    });

    $('.reduce').click(function () {
        if (count - 1 > 0) {
            count -= 1;
        }
        $('.count').val(count);
    });

    $('.add-btn').click(function () {
        if (!getCookie('userid')) {
            location.href = 'login.html';
        }
        $.ajax({
            type: 'get',
            url: '../api/addcart.php',
            dataType: 'json',
            data: {
                gid,
                uid: getCookie('userid'),
                count: $('.count').val() * 1
            },
            success: function (res) {
                if (res.code == 0) {
                    gu.getCart().then(function (data) {
                        var obj = cartRender(data);
                        $('.cart-alert .count b').text(obj.count);
                        $('.cart-alert .price b').text(obj.allprice);
                        $('.cart-alert').show().find('.mesg').text(res.mesg);
                    });
                } else {
                    $('.cart-alert').show().find('.mesg').text(res.mesg);
                }
            }
        });
    });

    $('.cart-alert .gosele').click(function () {
        window.open('shopCart.html');
        $('.cart-alert').hide();
    });

    $('.cart-alert .continue').click(function () {
        $('.cart-alert').hide();
    });

    function getCookie(key) {
        if (!document.cookie) return null;
        var cookieArr = document.cookie.split('; ');
        var value = '';
        cookieArr.some(ele => {
            if (ele.indexOf(key) != -1) {
                value = ele.split('=')[1];
                return true;
            }
        });


        return value;
    }

    // 搜索
    search('.search-input', '.search-btn');

}())