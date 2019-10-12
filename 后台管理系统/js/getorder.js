(function () {

    console.log(1);
    $.ajax({
        type: "GET",  //默认get
        url: "../api/getdata.php",  //默认当前页
        data: {
            db: 'orders'
        },
        dataType: "json",
        success: function (response) {  //请求成功回调
            console.log(response);
            if (response.code == 0) {
                orderRender(response);
            }
        }
    });

    function orderRender(res) {
        var html = '';
        res.list.forEach(el => {
            html += `<tr>
                        <td>
                            <div class="checker" id="uniform-undefined"><span class=""></span></div>
                        </td>
                        <td>${el.o_id}</td>
                        <td contenteditable="true">${el.g_name.length > 6 ? el.g_name.slice(0, 6) + '...' : el.g_name}</td>
                        <td contenteditable="true">${el.g_price}</td>
                        <td contenteditable="true">999</td>
                        <td contenteditable="true">${el.count}</td>
                        <td contenteditable="true">${el.g_url.length > 20 ? el.g_url.slice(0, 20) + '...' : el.g_url}</td>
                        <td>
                            <button type="submit" class="btn btn-success">修改并保存</button>
                            <button type="submit" class="btn btn-danger">删除</button>
                        </td>
                    </tr>`;
        });

        $('tbody').html(html);
    }
}())