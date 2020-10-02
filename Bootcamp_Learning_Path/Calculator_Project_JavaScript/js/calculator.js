// Globals
let runningTotal = 0;
let buffer = "0";
let previousOperator = null;

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
    screen.innerText = buffer;
}

// helper functions
function handleSymbol(value) {
    console.log(value);
    switch (value) {
        case '∁':
            buffer = "0";
            runningTotal = 0;
            break;
        case '+':
        case '−':
        case '÷':
        case '×':
            handleMath(value);
            break;
    }
}

function handleNumber(value) {
    if (buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
}

function handleMath(value) {
    if (buffer === "0") {
        // do nothing
        return;
    }

    const intBuffer = parseInt(buffer);

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = value;
    buffer = "0";
}

function flushOperation(intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer;
    } else if (previousOperator === '−') {
        runningTotal -= intBuffer;
    } else if (previousOperator === '×') {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
}

// start function
function init() {
    document.querySelector('.calc-buttons')
        .addEventListener('click', function(event) {
            buttonClick(event.target.innerText);
        })
}

init();