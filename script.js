const display = document.getElementById('display');
const clearBtn = document.getElementById('clear');
const periodBtn = document.getElementById('period');
const backBtn = document.getElementById('backspace');
const equalsBtn = document.getElementById('equals');

const numbers = document.querySelectorAll('.number');
const operatorList = document.querySelectorAll('.operation');

let firstOperand = '';
let secondOperand = '';
let operator = '';
let result;
let clearDisplay = false;

numbers.forEach((digit) => {
  digit.addEventListener('click', (e) => {
    if (firstOperand.length < 9) {
      firstOperand += e.target.value;
      display.value = firstOperand;
    }
  });
});

clearBtn.addEventListener('click', () => {
  firstOperand = '';
  secondOperand = '';
  operator = '';
  display.value = 0;
});

backBtn.addEventListener('click', () => {
  firstOperand = firstOperand.slice(0, -1);
  display.value = display.value.slice(0, -1);
});

periodBtn.addEventListener('click', () => {
  if (!firstOperand.includes('.')) {
    firstOperand += '.';
    display.value = firstOperand;
  }
});

operatorList.forEach((operation) => {
  operation.addEventListener('click', (e) => {
    if (firstOperand === '') return;
    if (secondOperand !== '') {
      calculate();
    }
    operator = e.target.getAttribute('value');
    secondOperand = firstOperand;
    firstOperand = '';
  });
});

const calculate = () => {
  if (firstOperand === '' || secondOperand === '') return;
  let firstNum = parseFloat(firstOperand);
  let secondNum = parseFloat(secondOperand);

  switch (operator) {
    case '+':
      result = secondNum + firstNum;
      break;
    case '−':
      result = secondNum - firstNum;
      break;
    case '×':
      result = secondNum * firstNum;
      break;
    case '÷':
      if (firstNum === 0) {
        display.value = 'Error';
        alert('You cannot divide by 0');
        return;
      } else {
        result = secondNum / firstNum;
        break;
      }
    default:
      return;
  }

  firstOperand = Math.round(result * 1000) / 1000;
  operator = '';
  secondOperand = '';
  display.value = firstOperand;
  clearDisplay = true;
};

equalsBtn.addEventListener('click', () => {
  if (secondOperand !== '') {
    calculate();
  }
  firstOperand = '';
  clearDisplay = true;
});
