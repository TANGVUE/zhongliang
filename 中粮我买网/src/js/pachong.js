var data = [];

document.querySelectorAll('.floor')[8].querySelectorAll('.tab li').forEach((dom, index) => {
    var imgurl = dom.querySelector('img') ? dom.querySelector('img').src : null;
    var names = dom.querySelector('.name') ? dom.querySelector('.name').innerText : null;
    var price = dom.querySelector('.price') ? dom.querySelector('.price').innerText : null;

    var obj = {
        type: '全球购',
        shop: '中粮全球店',
    }

    if (imgurl && names && price) {
        obj.imgurl = imgurl;
        obj.names = names;
        obj.price = price;
        obj.imglist = imgurl;
        data.push(obj);
    }

});

console.log(JSON.stringify(data));

