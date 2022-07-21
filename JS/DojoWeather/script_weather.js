var burbank_link = document.getElementById('link1');
var chicago_link = document.getElementById('link2');
var dallas_link = document.getElementById('link3');

function off(){
    close_policy.style.display='none';
}

function myFunction(){
    alert("Page is loading...");
}

function degreesCToF(degreesC) {
    return degreesC * 9 / 5 + 32;
}

function degreesFToC(degreesF) {
    return Math.round((degreesF - 32) *5 / 9);
}

function convert(element){
    var elementNames= [
        "temp_1", "temp_2", "temp_3", "temp_4",
        "temp_5", "temp_6", "temp_7", "temp_8"
    ];
    for(var i=0; i<elementNames.length; i++){
        var elementName = elementNames[i];
        var cell = document.getElementById(elementName);
        if (element.value == "C°") {
            cell.innerText = degreesFToC(cell.innerText);
        } 
        else {
            cell.innerText = degreesCToF(cell.innerText);
        }
    }
}
