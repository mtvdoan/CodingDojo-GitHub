$('#second_block').click(function() {
    var counter = 1; // keeps track of how many times the setInterval has run
    var colorSwap = setInterval(function () {
        changeColor($('#third_block')); // calls the changeColor() function

        if (++counter === 10) { // first increments counter and checks to see if counter equals 10
            stopChanging(colorSwap); // helper function that clears the interval timer of setInterval
        }
    }, 1000); // 1000 will cause this setInterval to fire once per second

});

function changeColor(ele) { // this simply changes the background-color of a targeted element based on what the background color already is
    if (ele.css('background-color') != 'rgb(255, 0, 0)') { // ele.css('background-color') returns an rgb value. I haven't looked into whether a word like "red" can be returned.
        ele.css('background-color', 'red');
    } else {        
        ele.css('background-color', 'black');
    }
}

function stopChanging(intID) { // helper function that clears the interval timer of setInterval
    clearInterval(intID); // clearInterval takes an identifier of the setInterval
}