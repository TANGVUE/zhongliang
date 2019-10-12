(function () {
    var regCheck = {
        tel: function (str) {
            var reg = /(^[0-9]{6,}@)|(^[0-9]{11,12}$)/;
            return reg.test(str);
        },
        username: function (str) {
            var reg = /^[a-zA-Z][a-zA-Z0-9]{7,12}$/;
            return reg.test(str);
        },
        password: function (str) {
            var reg = /^[\w]{6,14}$/;
            return reg.test(str);
        },
        sure: function (str) {
            return str == $('.psd').val();
        },
        verification: function (str) {
            var reg = /^[0-9]{6}$/;
            return reg.test(str);
        }
    }
    var isok = [false, false, false, false, false, false];

    function checkFrom($this) {
        var str = $this.val().trim();
        var type = '';
        var index = 0;
        if ($this.attr('class').indexOf('tel-emil') != -1) {
            type = 'tel';
        } else if ($this.attr('class').indexOf('user') != -1) {
            type = 'username';
        } else if ($this.attr('class').indexOf('psd') != -1) {
            type = 'password';
        } else if ($this.attr('class').indexOf('sures') != -1) {
            type = 'sure';
        } else if ($this.attr('class').indexOf('verification') != -1) {
            type = 'verification';
        }

        $('.ck').each(function (i, dom) {
            if (dom.className == $this.attr('class')) {
                index = i;
            }
        });


        if (regCheck[type](str)) {
            $('.err-tips').eq(index).css('display', 'none');
            isok[index] = true;
            if (index == 1) {
                $.ajax({
                    type: 'get',
                    url: '../api/checkUser.php',
                    data: {
                        username: str
                    },
                    success: function (res) {
                        var data = JSON.parse(res);
                        console.log(data);
                        if (data.code) {
                            $('.err-tips').eq(index).text('该用户已被占用');
                            $('.err-tips').eq(index).css('display', 'block');
                            isok[index] = false;
                        }
                    }
                });
            }
        } else {
            if (index == 1) {
                $('.err-tips').eq(index).text('用户名不符合要求');
            }
            $('.err-tips').eq(index).css('display', 'block');
            isok[index] = false;
        }
    }

    $('.ck').on('blur', function () {
        var $this = $(this);
        checkFrom($this);
    });

    $('.check-box').on('click', function (e) {
        isok[5] = e.target.checked;
    });

    $('.rigister-btn').on('click', function () {
        var bool = isok.every(function (value) {
            return value;
        });

        if (bool) {
            $('.reg-tips').css('display', 'none');

            //发起注册
            $.ajax({
                type: 'post',
                url: '../api/rigister.php',
                data: {
                    username: $('.user').val(),
                    password: $('.psd').val(),
                    tel: $('.tel-emil').val()
                },
                success: function (str) {
                    var res = JSON.parse(str);
                    if (res.code == 0) {
                        location.href = 'login.html';
                    } else {

                    }
                }
            });
        } else {
            $('.reg-tips').css('display', 'block');
        }
    });



}())