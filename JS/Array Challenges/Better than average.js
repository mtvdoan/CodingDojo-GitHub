// Better than average
// Given an array of numbers return a count of how many of the numbers are larger than the average.

function betterThanAverage(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    let average = sum / arr.length;
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > average){
            count+=1;
        }
    }
    return count;
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
