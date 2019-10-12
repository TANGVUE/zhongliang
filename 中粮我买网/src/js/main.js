(function () {
    siwerp({
        el: '.siwerp',
        data: ['img/indeximg/banner1.jpg', 'img/indeximg/banner2.jpg', 'img/indeximg/banner3.jpg', 'img/indeximg/banner4.jpg', 'img/indeximg/banner5.jpg', 'img/indeximg/banner6.jpg', 'img/indeximg/banner7.jpg', 'img/indeximg/banner8.jpg', 'img/indeximg/banner9.jpg'],
        timer: 4000,
        width: 800,
        height: 450
    });

    var timer = null;
    window.onload = function () {
        timer = setTimeout(function () {
            $('.top-box').animate({
                height: '100px'
            }, 600);
        }, 3000);
    }

    window.onscroll = function () {
        clearTimeout(timer);
        $('.top-box').animate({
            height: '100px'
        }, 600);
    }


    // news-box
    $('.news-btns li').each(function (index, dom) {
        $(dom).on('mouseenter', function () {
            $(this).attr('class', 'active').siblings().attr('class', '');
            $('.news-panel').eq(index).attr('class', 'news-panel show').siblings().attr('class', 'news-panel');
        });
    });


    // kind-list 事件注册
    $('.menu-one .kinds-btn').hover(function () {
        $(this).css({
            'backgroundColor': '#ffffff',
        }).siblings().css('background', 'none');
        $(this).find('>a').css('color', '#3ea600');
        $(this).find('.icon').css('backgroundPosition', '-18px 0');
        $(this).find('.sub-kinds').addClass('show');
    }, function () {
        $(this).css('background', 'none');
        $(this).find('>a').css('color', '#ffffff');
        $(this).find('.icon').css('backgroundPosition', '0 0');
        $(this).find('.sub-kinds').removeClass('show');
    }
    );

    // kinds渲染
    $.ajax({
        type: "GET",  //默认get
        url: "lib/jsondata/kindslist.json",  //默认当前页
        dataType: "json",
        success: function (response) {  //请求成功回调
            kindsCreat(response);
        }
    });


    function kindsCreat(res) {
        var count = 0;
        var startIndex = 0;
        $('.sub-kinds').each(function (index, dom) {
            var html = '';
            var ulStr = '';
            switch (index) {
                case 0:
                    count = 9;
                    startIndex = 0;
                    break;
                case 1:
                    startIndex += count;
                    count = 2;
                    break;
                case 2:
                    startIndex += count;
                    count = 9;
                    break;
                case 3:
                    startIndex += count;
                    count = 8;
                    break;
                case 4:
                    startIndex += count;
                    count = 8;
                    break;
                case 5:
                    startIndex += count;
                    count = 7;
                    break;
                case 6:
                    startIndex += count;
                    count = 4;
                    break;
                case 7:
                    startIndex += count;
                    count = 6;
                    break;
                case 8:
                    startIndex += count;
                    count = 1;
                    break;
                case 9:
                    startIndex += count;
                    count = 1;
                    break;
                case 10:
                    startIndex += count;
                    count = 1;
                    break;
            }
            for (var i = startIndex, length = i + count; i < length; i++) {
                if (!res[i]) break;
                for (var j = 0; j < res[i].list.length; j++) {
                    ulStr += `<li><a href="###">${res[i].list[j]}</a></li>`;
                }
                html += `<div class="kinds-list">
                            <h4 class="sub-head">${res[i].kinds}</h4>
                            <ul>
                                ${ulStr}
                            </ul>
                        </div>`;
                ulStr = '';
            }

            dom.innerHTML = html;
        });
    }

    // 中间轮播图
    $('.lunbo-box .right-btn').click(function () {
        $('.lunbo-box ul').stop().animate({
            'marginLeft': '-1210px',
        });
    });

    $('.lunbo-box .left-btn').click(function () {
        $('.lunbo-box ul').stop().animate({
            'marginLeft': '0px',
        });
    });

    // 获取用户数据
    function GetUser(checkStr, ele) {
        this.checkStr = checkStr;
        this.ele = ele;
    }

    GetUser.prototype = {
        // 读取cookie 获取用户账号
        getCookie() {
            var cookieStr = document.cookie;
            var cookieArr = '';
            var res = null;

            if (cookieStr.length > 0) {
                cookieArr = cookieStr.split('; ');
                cookieArr.some(str => {
                    if (str.indexOf(this.checkStr) != -1) {
                        res = str.split('=')[1];
                        return true;
                    }
                });
            } else {
                return false;
            }
            return res;
        },
        // 检测userid get数据
        getData() {
            var userid = this.getCookie(this.checkStr);
            if (userid) {
                $.ajax({
                    type: 'get',
                    url: 'api/checkid.php',
                    data: {
                        userid
                    },
                    success: res => {
                        var data = JSON.parse(res);
                        if (data.code == 0) {
                            $(this.ele).html(data.username + '<a class="out-btn" href="###" style="padding-left:15px;">退出</a>');
                        }
                        $('.out-btn').on('click', function () {
                            clearUser();
                        });
                        function clearUser() {
                            var date = new Date();
                            date.setDate(date.getDate() - 1);
                            document.cookie = 'userid=0; expires=' + date + ';path=/';
                            location.reload();
                        }
                    }
                });
            } else {
                console.log('请先进行登录!');
            }
        },
        getCart() {
            var _this = this;
            var userid = this.getCookie(this.checkStr);
            if (!userid) return null;
            return new Promise(function (resolve, reject) {
                $.ajax({
                    type: 'get',
                    url: 'api/getcart.php',
                    dataType: 'json',
                    data: {
                        uid: _this.getCookie(_this.checkStr)
                    },
                    success: function (res) {
                        resolve(res);
                    }
                });
            });
        }
    }
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

    var scrollkey = false;
    $(document).on('scroll', function () {
        suctionTop();
        floorTo();
    });

    // 吸顶
    function suctionTop() {
        if (document.documentElement.scrollTop >= 600) {
            if (scrollkey) return;
            scrollkey = true;
            $('.suction-top').stop().animate({
                height: '80px'
            }, 200)
        } else {
            if (!scrollkey) return;
            scrollkey = false;
            $('.suction-top').stop().animate({
                height: '0px'
            }, 200)
        }
    }

    // 楼层跳跃
    $('.floor-nav').css('left', $('.content').get(0).offsetLeft - 50 + 'px');
    window.onresize = function () {
        $('.floor-nav').css('left', $('.content').get(0).offsetLeft - 50 + 'px');
    }

    function floorTo() {
        if (document.documentElement.scrollTop + window.innerHeight / 2 > $('.f1').get(0).offsetTop) {
            $('.floor-nav').css('display', 'block');
        } else {
            $('.floor-nav').css('display', 'none');
        }
        if (document.documentElement.scrollTop + window.innerHeight / 2 > $('.f9').get(0).offsetTop) {
            $('.floor-nav li').eq(8).attr('class', 'curr').siblings().attr('class', '');
        } else if (document.documentElement.scrollTop + window.innerHeight / 2 >= $('.f8').get(0).offsetTop) {
            $('.floor-nav li').eq(7).attr('class', 'curr').siblings().attr('class', '');
        } else if (document.documentElement.scrollTop + window.innerHeight / 2 > $('.f7').get(0).offsetTop) {
            $('.floor-nav li').eq(6).attr('class', 'curr').siblings().attr('class', '');
        } else if (document.documentElement.scrollTop + window.innerHeight / 2 > $('.f6').get(0).offsetTop) {
            $('.floor-nav li').eq(5).attr('class', 'curr').siblings().attr('class', '');
        } else if (document.documentElement.scrollTop + window.innerHeight / 2 > $('.f5').get(0).offsetTop) {
            $('.floor-nav li').eq(4).attr('class', 'curr').siblings().attr('class', '');
        } else if (document.documentElement.scrollTop + window.innerHeight / 2 > $('.f4').get(0).offsetTop) {
            $('.floor-nav li').eq(3).attr('class', 'curr').siblings().attr('class', '');
        } else if (document.documentElement.scrollTop + window.innerHeight / 2 > $('.f3').get(0).offsetTop) {
            $('.floor-nav li').eq(2).attr('class', 'curr').siblings().attr('class', '');
        } else if (document.documentElement.scrollTop + window.innerHeight / 2 > $('.f2').get(0).offsetTop) {
            $('.floor-nav li').eq(1).attr('class', 'curr').siblings().attr('class', '');
        } else if (document.documentElement.scrollTop + window.innerHeight / 2 > $('.f1').get(0).offsetTop) {
            $('.floor-nav li').eq(0).attr('class', 'curr').siblings().attr('class', '');
        }

    }

    $('.floor-nav li').each(function (index, dom) {
        dom.onclick = function () {
            $(document.documentElement).animate({
                scrollTop: $('.f' + (index + 1)).get(0).offsetTop - window.innerHeight / 2 + 10
            });
        }
    });

    // 点击跳转列表页

    $('.menu-one ul li').each(function (index, item) {
        $(item).click(function () {
            window.open('html/list.html?type=' + index);
            console.log(index);
        });
    });


    // hot-goods渲染
    $.ajax({
        type: 'get',
        url: 'api/getgoodslist.php',
        dataType: 'json',
        data: {
            type: '奶制品',
            page: 1,
            pages: 0,
            pageCount: 4,
            sort: 'ASC',
            section: 'g_price>0 AND'
        },
        success: function (res) {
            if (res.code == 0) {
                $('.hot-goods .goods').each(function (index, ele) {
                    $(ele).attr('data-id', res.list[index].g_id).attr('data-type', res.list[index].g_type).on('click', function () {
                        window.open('html/goods.html?gid=' + $(this).attr('data-id') + '&gtype' + encodeURI($(this).attr('data-type')));
                    });
                    $(ele).find('img').attr('src', res.list[index].g_url);
                    $(ele).find('.nametext').text(res.list[index].g_name);
                    $(ele).find('.introtext').text(res.list[index].g_intro);
                    $(ele).find('.price span').text('￥' + res.list[index].g_price);
                });
            } else {
                $('.hot-goods .goods-list').append($('<p>数据获取失败……</p>'));
            }
        }
    });


    // 楼层商品渲染
    $('.floor').each(function (index, ele) {
        var type = '';
        var page = 1;
        var pages = 0;
        var pageCount = 6;
        var sort = 'ASC';
        var section = 'g_price>0 AND';


        switch (index) {
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

        $.ajax({
            type: 'get',
            url: 'api/getgoodslist.php',
            dataType: 'json',
            data: {
                type,
                page,
                pages,
                pageCount,
                sort,
                section
            },
            success: function (res) {
                if (res.code == 0) {
                    $(ele).find('.item').each(function (index, item) {
                        $(item).find('img').attr('src', res.list[index].g_url);
                        $(item).find('.intro').text(res.list[index].g_name);
                        $(item).find('.price span').eq(1).text(res.list[index].g_price);
                        $(item).attr('data-id', res.list[index].g_id).attr('data-type', res.list[index].g_type).on('click', function () {
                            window.open('html/goods.html?gid=' + res.list[index].g_id + '&gtype=' + encodeURI(res.list[index].g_type));
                        });
                    });
                }
            }
        });
    });

    // 搜索

    function search(text, btn) {
        $(btn).click(function () {
            window.open('html/list.html?str=' + encodeURI($(text).val()));

            console.log(11);
        });
    }

    search('.search-input', '.search-btn');
    search('.search-txt', '.search-bt');

}());