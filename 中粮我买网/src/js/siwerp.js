(function () {

    function siwerp(obj) {

        // 默认配置参数
        var curParameter = {
            el: '#siwerp',
            timer: 400,
            width: '100%',
            height: 500,
            autoplay: true
            // data 必须
        }

        // 配置参数合并
        for (var key in obj) {
            curParameter[key] = obj[key];
        }


        // 数据初始化
        var siwerp = document.querySelector(curParameter.el);
        var length = curParameter.data.length;
        var index = 0;
        var timerkey = null;
        // 解决width参数为100%的问题
        if (curParameter.width == '100%') {
            curParameter.width = window.innerWidth;
            window.onresize = function () {
                siwerp.style.width = window.innerWidth + 'px';
                curParameter.width = window.innerWidth;
                console.log(window.innerWidth);
            }
        }

        // 组件渲染
        var html = '<ul  class="siwerp-imgs" >' + curParameter.data.map(function (url) {
            return `<li><img src="${url}"></li>`;
        }).join('') + '</ul>';
        siwerp.style.cssText = `width:${curParameter.width}px;height:${curParameter.height}px`;
        siwerp.innerHTML = html;
        var point = document.createElement('ul');
        point.className = 'siwerp-points';
        point.style.width = `${length * 20 + (length - 1) * 10}px`;
        var lis = '';
        for (var i = 0; i < length; i++) {
            lis += `<li></li>`;
        }
        point.innerHTML = lis;
        siwerp.appendChild(point);

        var imgs = siwerp.querySelectorAll('.siwerp-imgs li');
        var points = siwerp.querySelectorAll('.siwerp-points li');
        for (var i = 0; i < length; i++) {
            points[i].index = i;
        }
        imgs[index].style.left = 0;
        points[index].className = 'active';


        // 自动轮播 next
        function autoplay() {
            timerkey = setInterval(function () {
                next(index);
            }, curParameter.timer);
        }

        if (curParameter.autoplay && curParameter.data.length > 1) {
            autoplay();
            // 监听事件
            siwerp.addEventListener('mouseenter', function () {
                clearInterval(timerkey);
            });


            siwerp.addEventListener('mouseleave', function () {
                autoplay();
            });
        }

        // 上一张
        function prev(num) {
            // 上一张图进入候场状态
            if (num != 0) {
                imgs[num - 1].style.left = -curParameter.width + 'px';
                activePoints(num - 1);
                animate(imgs[num], { left: curParameter.width }, 200);
                animate(imgs[num - 1], { left: 0 }, 200);
                index--;
            } else {
                imgs[length - 1].style.left = -curParameter.width + 'px';
                activePoints(length - 1);
                animate(imgs[num], { left: curParameter.width }, 200);
                animate(imgs[num - 1], { left: 0 }, 200);
                index = length - 1;
            }
        }
        // 下一长
        function next(num) {
            // 下一张图进入候场状态
            if (num != length - 1) {
                imgs[num + 1].style.left = curParameter.width + 'px';
                activePoints(num + 1);
                animate(imgs[num], { left: -curParameter.width }, 200);
                animate(imgs[num + 1], { left: 0 }, 200);
                num++;
                index = num;
            } else {
                imgs[0].style.left = curParameter.width + 'px';
                activePoints(0);
                animate(imgs[num], { left: -curParameter.width }, 200);
                animate(imgs[0], { left: 0 }, 200);
                num = 0;
                index = num;
            }
        }


        // 排它
        function activePoints(index) {
            for (var i = 0; i < length; i++) {
                points[i].className = '';
            }
            points[index].className = 'active';
        }





        for (var i = 0; i < length; i++) {
            points[i].addEventListener('click', function () {
                if (this.index > index) {
                    imgs[this.index].style.left = curParameter.width + 'px';
                    activePoints(this.index);
                    animate(imgs[index], { left: -curParameter.width }, 200);
                    animate(imgs[this.index], { left: 0 }, 200);
                    index = this.index;
                } else {
                    imgs[this.index].style.left = -curParameter.width + 'px';
                    activePoints(this.index);
                    animate(imgs[index], { left: curParameter.width }, 200);
                    animate(imgs[this.index], { left: 0 }, 200);
                    index = this.index;
                }
            });
        }
    }

    window.siwerp = siwerp;

}())