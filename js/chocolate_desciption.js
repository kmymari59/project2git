// 解析URL中的Query參數
const urlParams = new URLSearchParams(window.location.search);

// 獲取selectedItem的值
const selectedItem = urlParams.get('selectedItem');

// 獲取對應的DOM元素
const itemContainer = document.getElementById('itemContainer');
// const allItems = document.getElementsByClassName('list_box');
const allItems = document.getElementsByTagName('article')
const allItems_li = document.getElementsByTagName('li')

$(document).ready(function () {

    if (selectedItem === 'morning') {
        // 顯示"沁心晨曦"的內容
        // 隱藏除了class為"morning"的項目以外的其他項目
        for (let i = 0; i < allItems.length; i++) {
            const item = allItems[i];
            if (!item.classList.contains('morning')) {
                // item.style.visibility = 'hidden';
                // item.style.height = 0;
                item.style={
                    visibility:'hidden',
                    height:0
                };
            }
        }
        $(".check_list li").removeClass("active_color");
        $(".check_list .morning").addClass("active_color");
    }

/*
    // 監聽按鈕點擊事件
    $(".check_list li").on("click", function (e) {
        e.preventDefault(); // 防止點擊時頁面跳轉
        
        // 要顯示的巧克力區
        var targetClass = $(this).attr("class"); // 取得被點擊的按鈕的 class
        if (targetClass === "allItem") {
            // 顯示全部商品
            $("article").removeClass("hide"); // 移除 hide 類別
        } else {
            // 顯示目標類別的商品
            $("article").addClass("hide"); // 加上 hide 類別
            $("article." + targetClass).removeClass("hide"); // 移除 hide 類別
        }


        // 被點選時要變色
        $(".check_list li").removeClass("active_color");
        $(this).addClass("active_color");
    });
*/
});
