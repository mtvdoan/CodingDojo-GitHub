// Decreasing Multiples of 3
// Using a loop write code that will console.log all of 
// the values that are evenly divisible by 3 from 100 down to 0.

function multiple_threes(num1, num2){
    let array = [];
    for(let i = num1; i >= num2; i--){
        if(i % 3 == 0){
            array.push(i);
        }   
    }
    console.log(array);
}
multiple_threes(100, 3);
