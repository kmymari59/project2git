$(function () {
    var size=0;

    // 全體收合
    $("#accordion").accordion({
        heightStyle: "content",
    });


    //STEP1
    $('input[type=radio]').change(function(){
        size=$(this).val(); //取得radio的值
        // alert(size);
    }); 


    // STEP2
    /*
    參考 (可以分開的)
    https://codepen.io/ahmetaksungur/pen/QWNEKXq
    */

    /* 數量增減 */
    $(".increment").click(function () {
        // 數量增加時，只有同一層的.qty會增加
        var n = $(this).siblings(".qty").val();
        n++;
        $(this).siblings(".qty").val(n);
    })
    $(".decrement").click(function () {
        // 數量減少時，只有同一層的.qty會減少
        // 數量最少只到0
        var n = $(this).siblings(".qty").val();
        if (n == 0) {
            return false;
        }
        n--;
        $(this).siblings(".qty").val(n);
    });


});