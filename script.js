document.addEventListener('DOMContentLoaded', () => {
    let display = document.getElementById('display');
    let currentOperand = '';
    let previousOperand = '';
    let operation = null;

    window.appendNumber = function(number) {
        if (currentOperand === '' && number === '0') return;
        currentOperand = currentOperand.toString() + number.toString();
        updateDisplay();
    }

    function updateDisplay() {
        display.innerText = currentOperand;
    }

    window.setOperation = function(op) {
        if (currentOperand === '') return;
        if (previousOperand !== '') {
            calculateResult();
        }
        operation = op;
        previousOperand = currentOperand;
        currentOperand = '';
    }

    window.calculateResult = function() {
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

    window.clearDisplay = function() {
        currentOperand = '';
        previousOperand = '';
        operation = null;
        updateDisplay();
    }
document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (!isNaN(key)) { // to check if its number (reminder to learn more about isNaN)
        appendNumber(key);
    } else if (key === '+') {
        setOperation('+');
    } else if (key === '-') {
        setOperation('-');
    } else if (key === '*') {
        setOperation('*');
    } else if (key === '/') {
        setOperation('/');
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === '=') {
        calculateResult();
    } else if (key === 'Escape' || key === 'c') {
        clearDisplay();
    }
});
});