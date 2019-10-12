(function () {

    $.ajax({
        type: "GET",  //默认get
        url: "../api/getdata.php",  //默认当前页
        data: {
            db: 'userdb'
        },  //格式{key:value}
        dataType: "json",
        success: function (response) {  //请求成功回调
            console.log(response);
            if (response.code == 0) {
                render(response);
            }
        }
    });


    function render(res) {
        var html = '';
        res.list.forEach(user => {
            html += `<tr>
                        <td><input type="checkbox" /></td>
                        <td>1</td>
                        <td contenteditable="true">${user.username}</td>
                        <td>${user.password}</td>
                        <td class="center">${user.tel}</td>
                        <td>
                            <button type="submit" class="btn btn-success">修改并保存</button>
                            <button type="submit" class="btn btn-danger">删除</button>
                            <button type="submit" class="btn btn-info">Edit</button>
                        </td>
                    </tr>`;
        });

        $('tbody').html(html);
    }

}())