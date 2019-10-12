/*
    name:animate
    author:webTang
    createTime:2019-9-9
    edition:1.0.0
*/

(function () {

    /*
        animate核心函数

        arg1:dom需要运动的dom节点
        arg2:styleObj是dom的最终样式形态
        arg3:time所有动画执行的时间
        arg4:callback是异步动画事件都执行完后，调用的回调函数
    */
    function animate(dom, styleObj, time, callback) {
        // 记录所有属性运动的状态
        var state = [];
        // 状态下标
        var index = 0;

        // 存放数据
        for (var key in styleObj) {
            // false表示 未执行完毕 true表示该属性动画已执行完毕
            state.push(false);
            domAnimation(key, styleObj[key], index++);
        }

        // 运动函数
        function domAnimation(prop, end, index) {
            // 获取初始值
            var startProp = getStyle(dom, prop);
            // 设置当前属性值变量
            var currentProp = startProp;
            // 计算在timer时间内，每10毫秒该运动多少步数
            var speed = prop != 'opacity' ? Math.floor((end - startProp) / (time / 10)) : (end - startProp) * 100 / (time / 10);
            // 开启定时器
            var timer = setInterval(function () {
                // 计算当前属性值
                if (prop != 'opacity') {
                    currentProp += speed;
                } else {
                    currentProp += speed / 100;
                }
                // 运动临界值判断
                if ((startProp > end && currentProp < end) || (startProp < end && currentProp > end)) {
                    currentProp = end;
                }
                // 赋值 区分opacity 和一般px单位 的属性赋值
                if (prop != 'opacity') {
                    dom.style[prop] = currentProp + 'px';
                } else {
                    dom.style[prop] = currentProp;
                }

                // 运动状态判断
                if (currentProp == end) {
                    clearInterval(timer);
                    state[index] = true;
                    checkState();
                }

            }, 10);
        }

        // 状态监测函数
        function checkState() {
            for (var i = 0; i < state.length; i++) {
                if (!state[i]) {
                    return;
                };
            }

            // 当所有属性到最终状态,执行回调
            if (callback) {
                callback(state);
            }
        }

    }

    // getStyle工具函数
    // 返回一个不带单位的属性num值
    function getStyle(dom, propStr) {
        return parseFloat(window.getComputedStyle(dom)[propStr]);
    }


    // 将框架内部的核心函数暴露到外部
    window.animate = animate;


}())


