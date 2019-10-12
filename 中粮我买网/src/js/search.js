
function search(text, btn) {
    $(btn).click(function () {
        window.open('../html/list.html?str=' + encodeURI($(text).val()));

        console.log(11);
    });
}