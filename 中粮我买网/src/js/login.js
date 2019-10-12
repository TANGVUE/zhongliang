(function () {

    var isok = [false, false];
    var $user = $('.username');
    var $psd = $('.password');

    $user.on('blur', function () {
        if ($(this).val().trim() == '') {
            $('.err-tips').eq(0).css('display', 'block');
            isok[0] = false;
        } else {
            $('.err-tips').eq(0).css('display', 'none');
            isok[0] = true;
        }
    });

    $psd.on('blur', function () {
        if ($(this).val().trim() == '') {
            $('.err-tips').eq(1).css('display', 'block');
            isok[1] = false;
        } else {
            $('.err-tips').eq(1).css('display', 'none');
            isok[1] = true;
        }
    });

    $('.enter').click(function () {
        console.log(isok[0], isok[1]);
        console.log(isok[0] && isok[1]);
        if (isok[0] && isok[1]) {
            $.ajax({
                type: 'post',
                url: '../api/checkLogin.php',
                data: {
                    username: $user.val(),
                    password: $psd.val()
                },
                success: function (res) {
                    var data = JSON.parse(res);
                    var date = new Date();
                    date.setFullYear(date.getFullYear() + 1);
                    if (data.code == 0) {
                        document.cookie = 'userid=' + data.userid + ';expires=' + date + ';path=/';
                        location.href = '../index.html';
                    } else {
                        $('.err-tips').eq(2).css('display', 'block');
                    }
                }
            });
        }
    });

}())