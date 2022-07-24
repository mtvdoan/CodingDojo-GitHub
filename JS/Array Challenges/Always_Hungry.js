// Objectives
// Get comfortable with loops: for and while.
// Get comfortable with conditionals: if/else.
// Please work on the following challenges and upload your work when done.

// Always Hungry
// Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.

function alwaysHungry(arr){
    let has_been_fed = false;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === "food"){
            console.log("yummy");
            has_been_fed = true;
        }
    }
    if (!has_been_fed){
        console.log("I'm hungry");
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
