let display = document.getElementById('display');
let currOperand = '';
let previoursOperand = '';
let operation = null;


function appendNumber(number) {
    if (currentOperand === '' && number === '0') return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentOperand;
}

function setOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculateResult();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentOperand = result;
    operation = null;
    previousOperand = '';
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previoursOperand = '';
    operation = null;
    updateDisplay();
}