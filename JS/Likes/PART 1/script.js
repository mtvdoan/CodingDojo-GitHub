// THIS IS FOR LIKES PART 1


var count=3;
var countElement = document.querySelector('#count');

// console.log(countElement);
function add1(){
    count++;
    countElement.innerText = count + " likes(s)";
    console.log(count);

}

// function subtract1(){
//     count--;
//     countElement.innerText ="The count is " + count;
//     console.log(count);

// }