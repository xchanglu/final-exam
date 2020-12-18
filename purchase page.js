function button_click(){
    sname = document.getElementById("name").value;
    snum = document.getElementById("number").value;
    total = document.getElementById("total").innerHTML;
    radio = document.getElementsByName("radio_button");
    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked == true){
            radio = radio[i].value;
            location.href="order page.html?" + sname + ":" + snum + ":" + total + ":" + radio;
        }
    }
}

temp = location.href.split("?");
data = temp[1].split(":");
apple = data[0];
orange = data[1];
banana = data[2];
watermelon = data[3];
document.getElementById("apple value").innerHTML = apple;
document.getElementById("orange value").innerHTML = orange;
document.getElementById("banana value").innerHTML = banana;
document.getElementById("watermelon value").innerHTML = watermelon;
document.getElementById("total").innerHTML = total;
total = parseInt(apple) + parseInt(orange) + parseInt(banana) + parseInt(watermelon);

