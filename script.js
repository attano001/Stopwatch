'use strict';
let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;
let state = "stopped"

//DOM elements
const displayEl = document.getElementById("display");

const startBtn = document.getElementById("startStopBtn")
const resetBtn = document.getElementById("resetBtn")


// main function
function stopWatch() {
    seconds++
    if(seconds / 60 === 1) {
        seconds = 0;
        minutes++
        if(minutes / 60 === 1) {
            minutes = 0;
            seconds = 0;
            hours++
        }
    }
    // Add a leading 0 if n/m/h are only one digit
    if(seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    }else{displaySeconds = seconds;}

    if(minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    }else{displayMinutes = minutes;}

    if(hours < 10) {
        displayHours = "0" + hours.toString();
    }else{displayHours = hours;}

    // display final time
    displayEl.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
    console.log(hours, minutes, seconds)
}

startBtn.addEventListener('click', function() {startStop()})

function startStop() {

    if(state === "stopped"){
        interval = window.setInterval(stopWatch, 1000)
        startBtn.textContent = "STOP";
        state = "started"
    }else{
        window.clearInterval(interval);
        startBtn.textContent = "START";
        state = "stopped"
    }
}

// reload page
resetBtn.addEventListener('click', function() {
    window.location.reload();
})
