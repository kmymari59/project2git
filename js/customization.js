$(function () {
    var size = 0;
    var box='h3:first-child span'
    var chocoTot = 0;

    // 全體收合
    $("#accordion").accordion({
        heightStyle: "content",
    });


    //STEP1
    $('input[type=radio]').change(function () {
        size = $(this).val(); //取得被選中的radio的值
        // alert(size); >>OK有吃到
        // 參考 https://www.fooish.com/jquery/dom-manipulation.html

        //先用remove刪除前一個長出來的，再用prepend長一個新的出來
        //prepend 在每個匹配的元素內部最前面加入... (內部插入)
        $('.hit').remove(); //刪掉前一個長出來的
        switch (size) {
            case '4':
                $(box).prepend(`<p class="hit">已選 四入禮盒</p>`);
                break;
            // 每個 case: 後方都會補上 break; 來阻止已完成的區塊在後方繼續執行
            case '6':
                $(box).prepend(`<p class="hit">已選 六入禮盒</p>`);
                break;
            case '8':
                $(box).prepend(`<p class="hit">已選 八入禮盒</p>`);
                break;
            case '12':
                $(box).prepend(`<p class="hit">已選 十二入禮盒</p>`);
                break;
            case '16':
                $(box).prepend(`<p class="hit">已選 十六入禮盒</p>`);
                break;
            default:
                break;
        }
    });


    // STEP2
    /*
    參考 (可以分開的)
    https://codepen.io/ahmetaksungur/pen/QWNEKXq
    */

    /* 數量增減 */

    

    $(".increment").click(function () {
        if(size == 0){
            alert("請先選擇顆數");
        }
        // 數量增加時(且總數未超過)，只有同一層的.qty會增加
        var n = $(this).siblings(".qty").val();

        //提示已達上限
        $('.over').remove();
        if (chocoTot >= size) {
            $(this).prepend(`<p class="over">可選數量已達到上限</p>`);
            return false;
        }

        n++;
        $(this).siblings(".qty").val(n);
        // 數量增加時，總數也增加
        chocoTot++;
        console.log(chocoTot);

    })

    $(".decrement").click(function () {
        if(size == 0){
            alert("請先選擇顆數");
        }

        // 數量減少時(且數量大於0)，只有同一層的.qty會減少
        var n = $(this).siblings(".qty").val();
        if (n == 0) {
            return false;
        }

        // 總數真的減少時，提示文字才會消失 (避免按了沒有選的巧克李的-，提示字也會不見)
        if(chocoTot<=size){
            $('.over').remove();
        }

        n--;
        $(this).siblings(".qty").val(n);
        // 數量減少時，總數也減少
        chocoTot--;
        console.log(chocoTot);
    });




});