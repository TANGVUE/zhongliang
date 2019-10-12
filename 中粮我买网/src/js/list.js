(function () {

    var type = location.search.split('=')[1];
    var page = 1;
    var pages = 0;
    var pageCount = 10;
    var sort = 'ASC';
    var isasc = false;
    var section = 'g_price>0 AND';


    var gu = new GetUser('userid', '.log-reg');
    gu.getData();
    var pro = gu.getCart();
    if (pro) {
        pro.then(function (res) {
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
        });
    }



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

    //页码 跳转
    $('.page-list').on('click', 'li', function () {
        page = $(this).text() * 1;
        $(this).attr('class', 'active').siblings().attr('class', '');
        init();
    });

    $('.page-prev').on('click', function () {
        page = page = page - 1 > 0 ? page - 1 : 1;
        init();
    });
    $('.page-next').on('click', function () {
        page = page = page + 1 <= pages ? page + 1 : pages;
        init();
    });

    $('.nav-btns li').eq(2).click(function () {
        if (isasc) {
            sort = 'ASC';
        } else {
            sort = 'DESC';

        }
        $(this).toggleClass('active');
        isasc = !isasc;
        init();
    });

    $('.nav-sure-btn').click(function () {
        if ($('.low-price').val().trim() && $('.low-price').val().trim()) {
            section = ' g_price BETWEEN ' + $('.low-price').val().trim() + ' AND ' + $('.high-price').val().trim() + ' AND ';
            init();
        }
    });

    var url = '';

    if (type.length == 1) {
        type = type * 1;
        switch (type) {
            case 0: type = '海鲜肉类'; break;
            case 1: type = '时令蔬果'; break;
            case 2: type = '进口食品'; break;
            case 3: type = '饮料冲调'; break;
            case 4: type = '休闲保健'; break;
            case 5: type = '调味粮油'; break;
            case 6: type = '奶制品'; break;
            case 7: type = '母婴食品'; break;
            case 8: type = '全球购'; break;
            case 9: type = '全球购'; break;
            case 10: type = '全球购'; break;
        }
        url = "../api/getgoodslist.php";
    } else {
        url = '../api/search.php';
        type = decodeURI(type);
    }

    function init() {
        $.ajax({
            type: "GET",
            url,
            data: {
                type,
                page,
                sort,
                section,
                pageCount
            },
            dataType: 'json',
            success: function (response) {
                if (response.code == 0) {
                    render(response);
                } else {
                    $('.goods-list').html('没有找到该商品....');
                }
            }
        });
    }

    init();

    // 搜索
    search('.search-input', '.search-btn');

    function render(res) {
        var goodshtml = '';
        var pagehtml = '';
        pages = Math.ceil(res.count / 10);
        res.list.forEach(data => {
            goodshtml += `<div class="goods" data-id="${data.g_id}" data-type="${data.g_type}">
                        <img src="${data.g_url}" alt="">
                        <p class="price">￥${data.g_price}</p>
                        <p class="intro">
                            ${data.g_name}
                        </p>
                        <ul class="label-list">
                            <li>
                                已评价
                                <span class="com-count">99+</span>
                            </li>
                            <li>
                                <span class="iconfont icon-shoucang
                                "></span>
                                收藏
                            </li>
                            <li>
                                <span class="iconfont icon-gouwuche"></span>
                                加入购物车
                            </li>
                        </ul>
                    </div>`;
        });
        $('.goods-list').html(goodshtml).on('click', '.goods', function () {
            window.open('goods.html?gid=' + $(this).attr('data-id') + '&gtype=' + encodeURI($(this).attr('data-type')));
        });

        for (var i = 1; i <= pages; i++) {
            if (i == page) {
                pagehtml += `<li class="active">${i}</li>`;
                continue;
            }
            pagehtml += `<li>${i}</li>`;
        }
        $('.page-list').html(pagehtml);
        $('.page-num').html('共' + pages + '页');
        $('.new-page').val(page);
        $('.low-price').val('');
        $('.high-price').val('');
    }

}())