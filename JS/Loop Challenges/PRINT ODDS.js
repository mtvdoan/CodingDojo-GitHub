// Print odds 1-20
// Using a loop write code that will console.log all of 
// the odd values from 1 up to 20.

function odds(num1,num2){
    let array = [];
    for(let i = 0; i <= 20; i++){
        if(i%2 === 1){
            array.push(i);
        }
    }
    console.log(array);    
}
odds(1,20);
