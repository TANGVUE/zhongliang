(function () {

    $.ajax({
        type: "GET",  //默认get
        url: "../api/getdata.php",  //默认当前页
        data: {
            db: 'goods'
        },
        dataType: "json",
        success: function (response) {  //请求成功回调
            console.log(response);
            if (response.code == 0) {
                goodsRender(response);
            }
        }
    });

    function goodsRender(res) {
        var html = '';
        res.list.forEach(el => {
            html += `<tr>
                        <td>1</td>
                        <td contenteditable="true">${el.g_name.length > 6 ? el.g_name.slice(0, 6) + '...' : el.g_name}</td>
                        <td contenteditable="true">${el.g_price}</td>
                        <td contenteditable="true">9999</td>
                        <td contenteditable="true">${el.g_url.length > 20 ? el.g_url.slice(0, 20) + '...' : el.g_url}</td>
                        <td>
                            <button type="submit" class="btn btn-info">修改保存</button>
                            <button type="submit" class="btn btn-danger">删除</button>
                        </td>
                    </tr>`;
        });

        $('tbody').html(html);
    }


}())