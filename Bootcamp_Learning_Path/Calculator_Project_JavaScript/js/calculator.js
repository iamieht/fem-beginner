// Globals
let runningTotal = 0;
let buffer = "0";
let previousOperator;

// Screen
const screen = document.querySelector('.screen');

// click
function buttonClick(value) {
    if (isNaN(value)) {
        // is not a number
        handleSymbol(value);
    } else {
        // this is a number
        handleNumber(value);
    }

}

// helper functions
function handleSymbol() {}

function handleNumber() {}

// start function
function init() {
    document.querySelector('.calc-buttons')
        .addEventListener('click', function(event) {
            buttonClick(event.target.innerText);
        })
}

init();