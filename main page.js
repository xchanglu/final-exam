function button_click(){
    apple = document.getElementById("apple value").innerHTML * 1000;
    orange = document.getElementById("orange value").value * 1500;
    banana = document.getElementById("banana value").value * 3000;
    watermelon = document.getElementById("watermelon value").value * 3000;
    location.href="purchase page.html?" + apple + ":" + orange + ":" + banana + ":" + watermelon;
}
// 구매 버튼



function increase(){
    document.onmousedown = function(){
        if(event.button == 0){
            var num = parseInt(document.getElementById("apple value").innerHTML);
            num += 1;
            document.getElementById("apple value").innerHTML = num;
        }

        else if(event.button == 2){
            var num = parseInt(document.getElementById("apple value").innerHTML);
            num -= 1;
            document.getElementById("apple value").innerHTML = num;
        }
    }
}
// 클릭 수량 증가

