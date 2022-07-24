// Write a function that will reverse the values an array and return them.
function reverse(arr) {
    let left = 0;
    let right = arr.length -1;
    while (left < right) {
        let x = arr[left];
        arr[left] = arr[right];
        arr[right] = x;
        left++;
        right--;
    }
    return arr;

}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
