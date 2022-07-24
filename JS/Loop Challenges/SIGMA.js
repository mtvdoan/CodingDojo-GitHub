// Sigma
// Write code that will add all of the values from 1-100 onto 
// some variable sum and at the end console.log 
// the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

function sigma(num1, num2){
    let result = 0;
    for(let i = num1; i <= num2; i++){
        result += i;
    }
    console.log(result);
}
sigma(1,100);
