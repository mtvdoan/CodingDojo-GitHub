// 1. Given an array of numbers, return the product of all numbers in the array.
// Example:
// [2, 3, 4] should return 24
// [5, 5, 3] should return 75

// function arrayProduct(arr) {
    
//     var product = 1
//     for(var i = 0; i < arr.length; i++){
//         product = arr[i] * product
//     }
//     return product;
// }
// arr = [2,3,4];
// console.log(arrayProduct(arr));


// 2. Given two values, num and count, return an array that consists of count copies of num
// Example:
// 3, 4 should return [3, 3, 3, 3]
// 9, 5 should return [9,9,9,9,9]






// function makeArray(num, count) {
//     newarr = [];
    
//     for(var i = 0; i < count; i++){
//         newarr[i] = num;
//     }
    
//     return newarr
// }

// num = 3;
// count = 4;
// console.log(makeArray(num,count));
  
//   // 3. Given an array and a number, return a new array where every value in original array has been multiplied by the number
//   // Example:
//   // [1, 2, 3], 5 should return [5, 10, 15]
//   // [10, -1, 6], 3 should return [30, -3, 18]
  
//   function multiplyArray(arr, number) {
//     newarr = [];
//         for(var i = 0; i < arr.length; i++){
//             newarr[i] = arr[i] * number;
//         }
//         return newarr
//   }
  
//   console.log(multiplyArray([1,2,3],5));
  
//   // 4. Given an array and a number, return a new array that does not contain anything smaller than the number
//   // Example:
//   // [1, 2, 3, 4, 5], 3 should return [3, 4, 5]
//   // [-10, -20, -30], 0 should return []
  
//   function removeSmall(arr, min) {
//     newarr = [];
//         for(var i = 0; i<=arr.length; i++){
//             if (arr[i] >= min) {
//                 newarr.push(arr[i]);
//             }
//         }
        
//     return newarr
//   }
//   arr = [1,2,3,4,5];
//   min = 3;
//   console.log(removeSmall(arr,min));



//   Question 1

// Given two numbers, a and b, representing the sides of a right triangle, return the hypotenuse of the triangle.

// Reminder: Pythagorean theorem is a² + b² = c²
// Hint: look at the built-in JavaScript math library to at if there are any functions that world be useful here.

// Example:
// hypotenuse(3, 4) -> 5

// function hypotenuse(a,b) {   
//     var c = Math.sqrt((Math.pow(a,2) + Math.pow(b,2)));
//     return c;
// }

// console.log(hypotenuse(3,4));


// Question 2

// Given the numbers, start, stop and step, return an array that contains the numbers between start (inclusive) and stop (exclusive) counting up by step

// Example:
// range(0, 10, 1) -> [0,1,2,3,4,5,6,7,8,9]
// range(0, 20, 2) -> [0,2,4,6,8,10,12,14,16,18]
// range(10, 30, 3) -> [10,13,16,19,22,25,28]

// function range(a,b,c){
//     var arr =[];
//     for(var i = a; i < b; i+=c){
//         arr.push(i);
//     }
//     return arr;

// }
// console.log(range(0,10,1));


// Question 3

// Given a number, return a list of all factors that divide into that number

// Example:
// factors(10) -> [1,2,5,10]
// factors(24) -> [1,2,3,4,6,12,24]
// factors(7) -> [1,7]

// Hint: remember that the % operator will give you the remainder
// function factors(a){
//     var Array = [];
//     for(var i = 1; i<=a; i++){
//         if(a%i==0){
//             Array.push(i);
//         }
//     }
//     return Array;
// }
// console.log(factors(10));
// Question 4

// Given a list of strings, and a string called separator, return a string that connects all the strings on the list together, with separator between each one.

// Example:
// Strings=["I", "love", "butts"]
// Separator="-"
// Result: "I-love-butts"

// Strings=["apples","bananas","carrots"]
// Separator=", "
// Result: "apples, bananas, carrots"

// function butts(arr,sep){
//     var text = "";
    
//     for(var i = 0; i<arr.length; i++){
        
//         text += arr[i];
//             if( i < arr.length-1){
//                 text += sep;  
//             }
//     }
//     return text;
// }
// arr = ["I","love","butts"];
// console.log (butts(arr,"-"));


// # Find Max

// Given an array, return the index of the largest value in the array.

// Example:

// findMax([1, 100, 10]) should return 1, because the element at index 1 is the largest.
// findMax([1, 10, 100]) should return 2
// findMax([100, 10, 1]) should return 0

// function findMax(arr){
//     var maxindex = 0;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i]>arr[maxindex]){
//             maxindex = i;
//         }
//     }
//     return maxindex;
    
// }
// console.log(findMax([100,10000,133335232]));

// # Swap Numbers

// Given an array and two indexes, return an array where the values at those two positions are swapped

// Example:

// swapIndexes([1, 2, 3], 0, 2) should return [3, 2, 1]
// function swapIndexes(array,index1, index2){
//     var temp = array[index1];
//     array[index1] = array[index2];
//     array[index2] = temp;
//     return array;
// }
// array = [1,2,3];
// console.log(swapIndexes(array,0,2));




// # Bubble Sort

// Given an array, return the array with the elements in sorted order using the Bubble sort algorithm

// The idea with bubble sort is that you loop over the array, bubbling up the biggest values to the top.

// The algorithm is as follows:

// Let finalPosition be the last index in the array
// Repeat the following until finalPosition is 0
//   Find the largest number between the beginning of the array and finalPosition.
//   Swap that value and the value at finalPosition.
//   Now that the value at finalPosition contains the largest number, decrement it by 1

// Example:

// bubblesort([5, 2, 1, 4, 3]) should return [1, 2, 3, 4, 5]



// function collatz(N){
//     var StepCounter = 0;
//         while (N > 1){
           
//             if(N%2==0){
//                 N=N/2;
//                 StepCounter+=1
//             }
//             else{
//                 N=(N*3) +1;
//                 StepCounter+=1
//             } 
//         }
//     return StepCounter;
// }
// console.log(collatz(5));



// str = "qwertyuiop\n"
// str += "asdfghjkl;\n"
// str += "zxcvbnm,./"


// str = "qwertyuiop\n" +
//       "asdfghjkl;\n" +
//       "zxcvbnm,./"

// str = "qwertyuiop\nasdfghjkl;\nzxcvbnm,./"

// top = "qwertyuiop\n"
// middle = "asdfghjkl;\n"
// bottom = "zxcvbnm,./"
// str = top + middle + bottom
// Write to Alex Ames

// function formatBoard(board){

//     return ` ${board[0][0]} | ${board[0][1]} | ${board[0][2]}
// ---+---+---
//  ${board[1][0]} | ${board[1][1]} | ${board[1][2]}
// ---+---+---
//  ${board[2][0]} | ${board[2][1]} | ${board[2][2]} `

// }
// var board = [
//     ["X", "O", "O"],
//     ["X", "X", " "],
//     ["X", " ", "O"]
// ];
// console.log(formatBoard(board));


// Given a tic tac toe board, an array with two values [column, row] 
// that represents a cell on the board, and a letter (either "X" or "O"), 
// if that cell is open, replace it with that letter and return true. 
// If that cell already has an X or O in that spot, do not make any changes and return false.


// function formatBoard(board){

//         return `     ${board[0][0]} | ${board[0][1]} | ${board[0][2]}
//     ---+---+---
//      ${board[1][0]} | ${board[1][1]} | ${board[1][2]}
//     ---+---+---
//      ${board[2][0]} | ${board[2][1]} | ${board[2][2]} `
    
// }

// var board = [
//     ["X", "O", "O"],
//     ["X", "X", " "],
//     ["X", " ", "O"]
// ];

// function makeMove(board, local, player){
//     var row = local[1];
//     var column = local[0];
//     if (board[row][column] == " ") {
//         board[row][column]= player
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(formatBoard(board));
// console.log(makeMove(board, [0, 0], "X")); // The top left cell already has an X, so return false.
// console.log(formatBoard(board)); // Should print out the same board with no changes.
// console.log(makeMove(board, [1, 2], "O")); // Column 1, row 2 is "_", so replace it with "O" and return true
// console.log(formatBoard(board)); // The board should now be updated with an "O" in the bottom middle cell.



// function formatBoard(board){

//         return `     ${board[0][0]} | ${board[0][1]} | ${board[0][2]}
//     ---+---+---
//      ${board[1][0]} | ${board[1][1]} | ${board[1][2]}
//     ---++---+---
//      ${board[2][0]} | ${board[2][1]} | ${board[2][2]} `
    
// }

// var board = [
//     // Columns 0    1    2    
//              ["X", "O", "O"], // Row 0
//              ["X", "X", " "], // Row 1
//              ["X", " ", "O"]  // Row 2
// ];



// function getMoves(board){
//    var result = []
//     for (var row = 0; row < 3; row++) {
//             for (var column = 0; column < 3; column++){
//                 var cell =board[column][row];
//                 var local = [column,row]
//                     if(cell ==" "){
//                        result.push(local);
//                     } 
//             }
//     }
//     return result;        
// }       

// console.log(getMoves(board));


// Given a board, and an array of three [column, row] pairs, if all 
// three cells on the board match, return the winner, "X" or "O". 
// If they don't match, or if they all match but are all "_", 
// then return null. null is a special value that means that there is no value.

// split into two problems. 1 function to get cell; 2 calls get cells on all 3 cells & check all 3 
// if they are all the same with each other.


// function formatBoard(board){

//         return `     ${board[0][0]} | ${board[0][1]} | ${board[0][2]}
//     ---+---+---
//      ${board[1][0]} | ${board[1][1]} | ${board[1][2]}
//     ---++---+---
//      ${board[2][0]} | ${board[2][1]} | ${board[2][2]} `
    
// }
// var board = [
//     // Columns 0    1    2    
//              ["X", "O", "O"], // Row 0
//              ["X", "X", " "], // Row 1
//              ["X", " ", "O"]  // Row 2
// ];



// function getcell(board,location){
//     var columnindex = location[0]
//     var rowindex = location[1]
//     return board[rowindex][columnindex];
// }


// var location = [1, 2]
// console.log(getcell(board,location));

// function checkWinner(board,celllocations){
//     var cell1 = getcell(board,celllocations[0]);
//     var cell2 = getcell(board,celllocations[1]);
//     var cell3 = getcell(board,celllocations[2]);

   
//         if(cell1==cell2 && cell2==cell3 && cell1!=" "){
//             return cell1;
//         }
//         else{
//             return null;
//         }
// }
// topRow = [
//     [0, 0],
//     [1, 0],
//     [2, 0]
// ];
// leftColumn = [
//     [0, 0],
//     [0, 1],
//     [0, 2]
// ];
// topLeftToBottomRightDiagonal = [
//     [0, 0],
//     [1, 1],
//     [2, 2]
// ];
// console.log(checkWinner(board,topRow));
// console.log(checkWinner(board,leftColumn));
// console.log(checkWinner(board,topLeftToBottomRightDiagonal));


// Sum
// Given an array of integers, return the sum of all the integers in the array.


// function sum(array) {
// var sum = 0;
//     for(var i = 0; i<array.length; i++){
//         sum += array[i]
//     }
//   return sum;
// }
// array = [1,2,3,4,5];
// console.log(sum(array));

// find product
// function product(array){
//     var product =1;
//     for(var i = 0; i<array.length; i++){
//         product = array[i] * product;
//     }
//     return product;
// }
// array = [1,2,3,4,5];
// console.log(product(array));

// find max
// function findMax(ints){
//     var max = ints[0]
//     for(i = 0; i < ints.length; i++){
//        if(ints[i]>ints[0]){
//         max = ints[i];
//        } 
//     }
//     return max;
// }
// ints = [1,2,3,4,5];
// console.log(findMax(ints));

// find rectangle area 
// function area(rectangle){
//     var base = rectangle[0];
//     var height = rectangle[1];
//     var result = base*height;
//     return result;
// }

// // SUM OF RECTANGLES
// function sumofrectanglesareas(rectangles){
//     var sum = 0;
//     for(var i = 0; i<rectangles.length; i++){
//         var rectangle = rectangles[i];
//         sum+=area(rectangle);
//     }
//     return sum;
            
// }
    
// rectangles = [
//     [5, 5],
//     [3, 10],
//     [1, 1],
//   ]
// console.log(sumofrectanglesareas(rectangles));
    

//Given an array containing a list of rectangles represented by 
//[base, height] pairs, return [base, height] pair representing the largest rectangle. 
//largest rectangle with the largest area.
// function area(rectangle){
//     var base = rectangle[0];
//     var height = rectangle[1];
//     var result = base*height;
//     return result;
// } 
// function findBiggestRectangle(rectangles){
//     var biggestrect = area(rectangles[0]);
//     for(var i = 0; i < rectangles.length; i++){
        
//         if(area(rectangles[i]) > biggestrect){ 
//             biggestrect = area(rectangles[i]);
//         }
//     }
//     return biggestrect;

// }
// rectangles = [
//     [5, 5],
//     [3, 10],
//     [1, 1],
// ];
// console.log(findBiggestRectangle(rectangles));





// Given two arrays of equal size, both containing numbers, 
// return a new array where the values are the bigger of the 
// two values at each position in the array. This probably isn't 
// very clear, see the examples below to understand.
// function biggestArray(array1,array2){
//     var array3 = [];
//     for(var i = 0; i < array1.length; i ++){
//         if(array1[i]>array2[i]){
//             array3.push(array1[i])
//         }
//         else{
//             array3.push(array2[i])
//         }
//     }
//     return array3;
// }
// array1 = [10,20,30];
// array2 = [25,15,5];
// console.log(biggestArray(array1,array2));

//
// Print out a staircase
// Give a number N, print out a staircase made of *'s with N steps.



// function staircase(n){
//     var stars = ""
//     for(var i = 1; i <= n; i++){
//         stars+="*";
//         console.log(stars);
//     }
// }
// staircase(5);



// console.log(staircase(n));


//where the eff is waldo "@" in the picture?
// function waldo(picture){
//     for(var row=0; row < picture.length; row ++){
//         for(var column = 0; column < picture[row].length; column ++){
//             if(picture[row][column] == "@"){
//                 return [column,row];
//             }
//         }
//     }
// }
// picture = [
//     '-O-    __        ',
//     '/|\   (__)  /\   ',
//     '           /  \  ',
//     '  @        |  |  ',
//     '  |        |  |  ',
//     '-----------------',
// ]
// console.log(waldo(picture));

// function distance(point1,point2){
//     var distpoint1 = Math.pow((point2[0]- point1[0]),2);
//     var distpoint2 = Math.pow((point2[1] - point1[1]), 2);
//     var distbwpoint12 = Math.sqrt(distpoint1+distpoint2);
//     return distbwpoint12; 
// }

// console.log(distance([1,1],[4,5]))


var numberofmarbles = 3; 
numberofmarbles = numberofmarbles +1;
console.log(numberofmarbles);