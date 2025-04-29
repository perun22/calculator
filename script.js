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

clearBtn.addEventListener('click', () => {
  firstOperand = '';
  secondOperand = '';
  operator = '';
  display.value = 0;
});

backBtn.addEventListener('click', () => {
  let value = display.value;
  let delValue = (display.value = display.value.slice(0, -1));
  if (delValue) {
    return delValue;
  }
});

periodBtn.addEventListener('click', () => {
  firstOperand += '.';
  display.value = `${secondOperand} ${operator} ${firstOperand}`;
  if (display.value.includes('.')) {
    periodBtn.disabled = true;
  }
});

numbers.forEach((digit) => {
  digit.addEventListener('click', (e) => {
    clearDisplay = true;
    firstOperand += e.target.value;
    display.value = `${secondOperand} ${operator} ${firstOperand}`;
  });
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
    display.value = `${secondOperand} ${operator}`;
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
        display.textContent = 'Error';
        alert();
        return;
      } else {
        result = secondNum / firstNum;
        break;
      }
    default:
      return;
  }

  firstOperand = result.toString();
  operator = '';
  secondOperand = '';
  display.value = `${firstOperand}`;
};

equalsBtn.addEventListener('click', () => {
  if (secondOperand !== '') {
    calculate();
  }
  firstOperand = '';
});
