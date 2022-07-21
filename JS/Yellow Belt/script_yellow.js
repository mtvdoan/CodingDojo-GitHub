// I will need 3 different unique variables because each available animal listed has
// a different starting "pet" amount.
//Pepper: 3
//Bruce: 5
//Oscar: 8



var pepper_pets = 3;
var bruce_pets = 5;
var oscar_pets = 8;
// This function needs to remove the Donate button.
function remove(donate_click){
    donate_click.remove();
}

//All 3 functions below are used to control the pet counts.
function add1(){
    var countElement=document.querySelector('#pepper_pets');
    pepper_pets++;
    countElement.innerText = pepper_pets;
    console(pepper_pets);
}

function add2(){
    var countElement=document.querySelector('#bruce_pets');
    bruce_pets++;
    countElement.innerText = bruce_pets;
    console(bruce_pets);
}

function add3(){
    var countElement=document.querySelector('#oscar_pets');
    oscar_pets++;
    countElement.innerText = oscar_pets;
    console(oscar_pets);
}

//This function will make a window pop up.  I will need to rearrange the alert message to
//"You are looking for a: ____"
//Note to self: There's a select.  Need to use onchange.

function choice1(select) {
    alert("You are looking for a:  " + select.options[select.selectedIndex].text);
}



