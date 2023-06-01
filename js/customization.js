$(function () {
    // 全體收合
    $("#accordion").accordion({
        heightStyle: "content",
    });


    /*
    一版(現在會跟著一起動)
    onselect參考
    https://www.cnblogs.com/wxlkeepmoving/p/3162396.html
    
    https://blog.51cto.com/u_15064631/4027190
    */
    const minus = $('.qtyminus');
    const plus = $('.qtyplus');
    const input = $('.qty');
    minus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        if (value > 1) {
            value--;
        }
        input.val(value);
    });

    plus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
    })

    /*
    參考 (可以分開的)
    https://codepen.io/ahmetaksungur/pen/QWNEKXq
    */


    
});