var username = document.querySelector("#user_name");
var num1=document.querySelector("#count_1")
var num2=document.querySelector("#count_2");
function change(){
    username.innerText = "Monica Doan";
}

function accept(id){
    var element = document.querySelector(id)
    element.remove();

    num1.innerText--;
    num2.innerText++;
}

function reject(id){
    var element = document.querySelector(id);
    element.remove();

    num1.innerText--;
}


