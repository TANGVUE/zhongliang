(function () {


    function shopCart(obj) {

        // 默认配置
        var curParameter = {
            el: '.shopCart',
            data: '',
            classification: true,
            openSearch: true
        }

        // 参数合并
        for (var key in obj) {
            curParameter[key] = obj[key];
        }

        // 数据初始化
        var cart = document.querySelector(curParameter.el);
        // 后期可能搜索多次渲染的字符串
        var shopHtml = '';
        var parameterHtml = '';
        var goodsHtml = '';

        var delDom = null;

        // 初始渲染

        // 假如数据按商店分类
        if (curParameter.classification) {

            render(curParameter.data);

            cart.innerHTML = `
        <div class="head">
            <label>
                <input type="checkbox" class="check-all">
                <span>全选</span>
            </label>
            <span class="goods-sp">商品</span>
            <span class="price-sp">价格</span>
            <span class="count-sp">数量</span>
            <span class="cmp-sp">小计</span>
            <span class="operation-sp">操作</span>
        </div>

        <div class="content">
            ${shopHtml}
        </div>
        <div class="settlement">
            <label>
                <input type="checkbox" class="check-all">
                <span>全选</span>
            </label>
            <a href="###" class="slm-del">清除</a>
            <a href="###" class="slm-collection">收藏</a>
            <div class="pay-box">
                <div class="pay-count-box">
                    <span>已选中：</span>
                    <span class="pay-count">0</span>
                    <span>&nbsp;件数</span>
                </div>
                <div class="pay-price-box">
                    <span>合计：</span>
                    <span class="pay-price">￥0</span>
                </div>
                <a href="###" class="pay-btn">
                    支付
                </a>
            </div>
        </div>
        <div class="collection-alert">
        <p>收藏成功~感谢您对该商品的支持！</p>
    </div>
    <div class="del-alert">
        <p>您确定要删除这个商品项吗？</p>
        <a href="###">取消</a>
        <a href="###">确定</a>
    </div>`;
            shopHtml = '';
        }


        /*
            相关事件
        */

        var collecAlert = cart.querySelector('.collection-alert');
        var delAlert = cart.querySelector('.del-alert');
        var sureBtn = delAlert.querySelectorAll('a')[1];
        var cancleBtn = delAlert.querySelectorAll('a')[0];
        var shops = cart.querySelectorAll('.check-shop');
        var items = cart.querySelectorAll('.check-i');
        var alls = cart.querySelectorAll('.check-all');
        var payCount = cart.querySelector('.pay-count');
        var payPrice = cart.querySelector('.pay-price');

        // 记录被选中的商品id
        var ids = [];

        //事件委托

        cart.addEventListener('click', function (e) {
            //collection
            if (e.target.className == 'collection') {
                collection();
            }

            // del
            else if (e.target.className == 'del') {
                delAlert.style.display = 'block';
                delDom = e.target.parentNode.parentNode;
            }

            // add 
            else if (e.target.className == 'add') {
                add(e.target);
            }

            //reduce
            else if (e.target.className == 'reduce') {
                reduce(e.target);
            }

            //check-all
            else if (e.target.className == 'check-all') {
                for (var i = 0; i < shops.length; i++) {
                    shops[i].checked = e.target.checked;
                }

                for (var i = 0; i < items.length; i++) {
                    items[i].checked = e.target.checked;
                }

                for (var i = 0; i < alls.length; i++) {
                    alls[i].checked = e.target.checked;
                }
                settlement();
            }

            //check-shop
            else if (e.target.className == 'check-shop') {
                var its = e.target.parentNode.parentNode.parentNode.querySelectorAll('.check-i');
                for (var i = 0; i < its.length; i++) {
                    its[i].checked = e.target.checked;
                }
                checkShop();
                settlement();
            }

            // check-i
            else if (e.target.className == 'check-i') {
                var parentShop = e.target.parentNode.parentNode.parentNode;
                var ilist = parentShop.querySelectorAll('.check-i');
                var bool = Array.prototype.every.call(ilist, item => {
                    return item.checked;
                });
                parentShop.querySelector('.check-shop').checked = bool;
                checkShop();
                settlement();
            }

        });

        // 删除确认事件
        sureBtn.addEventListener('click', function () {
            delAlert.style.display = 'none';
            del();
        });
        cancleBtn.addEventListener('click', function () {
            delAlert.style.display = 'none';
            delDom = null;
        });


        // 相关事件函数
        // 渲染函数
        function render(data) {
            for (var i = 0; i < data.length; i++) {
                for (var n = 0; n < data[i].goods.length; n++) {
                    goodsHtml += ` <div class="goods" data-id="${data[i].goods[n].id}">
                    
                    <input type="checkbox" class="check-i">
                    <div class="goods-img">
                        <img src="${data[i].goods[n].imgURL}" alt="">
                    </div>
                    <div class="goods-introduce">
                        <p>
                            ${data[i].goods[n].introduce}
                        </p>
                    </div>
                    <div class="goods-price">
                        <p>￥${data[i].goods[n].price}</p>
                    </div>
                    <div class="goods-count">
                        <p>
                            <input type="button" value="-" class="reduce">
                            <input type="text" value="${data[i].goods[n].count}" class="count-num">
                            <input type="button" value="+" class="add">
                        </p>
                    </div>
                    <div class="goods-sum">
                        <p>￥${(data[i].goods[n].price * data[i].goods[n].count).toFixed(1)}</p>
                    </div>
                    <div class="goods-operation">
                        <a href="###" class="collection">收藏</a>
                        <a href="###" class="del">删除</a>
                    </div>
                </div>`;
                }
                shopHtml += ` <div class="shop">
                <p class="shop-name">
                    <label>
                        <input type="checkbox" class="check-shop">
                        <span></span>
                        <span>${data[i].shopName}</span>
                    </label>
                </p>
                <p class="shop-head">以下商品不支持优惠券使用</p>
                <div class="goods-list">
                   ${goodsHtml}
                </div>
            </div>`;
                goodsHtml = '';
            }

        }

        //search
        function search(searchStr) {
            var data = curParameter.data;
            var newData = [];
            var newGoods = [];

            for (var i = 0; i < data.length; i++) {
                if (data[i].shopName.indexOf(searchStr) != -1) {
                    newData.push(data[i]);
                    continue;
                }
                for (var n = 0; n < data[i].goods.length; n++) {
                    if (data[i].goods[n].parameter.toString().indexOf(searchStr) != -1) {
                        newGoods.push(data[i].goods[n]);
                    }
                }
                if (newGoods.length > 0) {
                    var obj = {};
                    // 防止更改原数据
                    for (var key in data[i]) {
                        obj[key] = data[i][key];
                    }
                    obj.goods = newGoods;
                    newData.push(obj);
                    newGoods = [];
                }

            }

            return newData;
        }

        function clear() {
            shops = cart.querySelectorAll('.check-shop');
            items = cart.querySelectorAll('.check-i');
            alls = cart.querySelectorAll('.check-all');
            for (var i = 0; i < shops.length; i++) {
                shops[i].checked = false;
            }

            for (var i = 0; i < items.length; i++) {
                items[i].checked = false;
            }

            for (var i = 0; i < alls.length; i++) {
                alls[i].checked = false;
            }
            settlement();
        }

        //del
        function del() {
            var parent = delDom.parentNode;
            var oid = delDom.dataset.id;
            $.ajax({
                type: "GET",
                url: "../api/delorder.php",
                data: {
                    oid
                },
                dataType: "json",
                success: function (response) {
                    if (response.code == 0) {
                        parent.removeChild(delDom);
                        // 删除数据
                        for (var i = 0; i < curParameter.data.length; i++) {
                            curParameter.data[i].goods.some(function (item, index) {
                                if (item.id == oid) {
                                    curParameter.data[i].goods.splice(index, 1);
                                }
                            });
                        }
                    } else {
                        alert('删除失败!');
                    }
                }
            });


            settlement();
        }

        // add -> settelement
        function add(dom) {
            var goods = dom.parentNode.parentNode.parentNode;
            var count = goods.querySelector('.count-num');
            var sum = goods.querySelector('.goods-sum p');
            var price = goods.querySelector('.goods-price');
            var id = goods.dataset.id;

            count.value = parseInt(count.value) + 1;
            update(goods, count.value);
            sum.innerHTML = '￥' + (count.value * price.innerText.slice(1)).toFixed(1);

            // 修改数据
            for (var i = 0; i < curParameter.data.length; i++) {
                curParameter.data[i].goods.forEach((item, index) => {
                    if (item.id == id) {
                        item.count = count.value * 1;
                    }
                });
            }
            settlement();
        }

        // reduce -> settelement
        function reduce(dom) {
            var goods = dom.parentNode.parentNode.parentNode;
            var count = goods.querySelector('.count-num');
            var sum = goods.querySelector('.goods-sum p');
            var price = goods.querySelector('.goods-price');
            var id = goods.dataset.id;

            count.value = parseInt(count.value) - 1 <= 0 ? 1 : parseInt(count.value) - 1;
            update(goods, count.value);
            sum.innerHTML = '￥' + (count.value * price.innerText.slice(1)).toFixed(1);

            // 修改数据
            for (var i = 0; i < curParameter.data.length; i++) {
                curParameter.data[i].goods.forEach((item, index) => {
                    if (item.id == id) {
                        item.count = count.value * 1;
                    }
                });
            }
            settlement();
        }

        function update(goods, count) {
            $.ajax({
                type: 'get',
                url: '../api/updatecount.php',
                dataType: 'json',
                data: {
                    oid: $(goods).attr('data-id'),
                    count
                },
                success: function (res) {

                }
            });
        }

        // collection
        function collection() {
            collecAlert.style.display = 'block';
            setTimeout(function () {
                collecAlert.style.display = 'none';
            }, 1000);
        }

        // checkbox 全部检测 ->settlement 
        function checkShop() {
            var bool1 = Array.prototype.every.call(shops, item => {
                return item.checked;
            });

            for (var i = 0; i < alls.length; i++) {
                alls[i].checked = bool1;
            }
        }

        // settlement
        function settlement() {
            var ckis = cart.querySelectorAll('.check-i');
            var count = 0;
            var price = 0;
            ckis.forEach(item => {
                if (item.checked) {
                    for (var i = 0; i < curParameter.data.length; i++) {
                        curParameter.data[i].goods.some(obj => {
                            if (item.parentNode.dataset.id == obj.id) {
                                count += obj.count;
                                price += obj.price * obj.count;
                            }
                        });
                    }
                }
            });

            payCount.innerText = count;
            payPrice.innerText = '￥' + price.toFixed(1);
        }


    }



    window.shopCart = shopCart;

}())