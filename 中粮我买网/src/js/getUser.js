(function () {
    /*
        获取用户信息：
            1.用户名
            2.购物车数据
    */

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
                    url: '../api/checkid.php',
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
                    url: '../api/getcart.php',
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

    window.GetUser = GetUser;

}())