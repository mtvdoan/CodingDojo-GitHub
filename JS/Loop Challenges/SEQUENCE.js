// Print the sequence
// Using a loop write code that will console.log the 
// values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

function one_point_five(num1,num2){
    let array = [];
    for(let i = num1; i >= num2; i-=1.5){
        array.push(i);
    }
    console.log(array);
}
one_point_five(4,-3.5);