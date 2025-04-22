const display = document.querySelector('.display');
const clearBtn = document.getElementById('clear');
const divideBtn = document.getElementById('division');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');
const multiplyBtn = document.getElementById('multiply');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const subtractBtn = document.getElementById('minus');
const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const additionBtn = document.getElementById('plus');
const zeroBtn = document.getElementById('zero');
const commaBtn = document.getElementById('comma');
const backBtn = document.getElementById('backspace');
const equalsBtn = document.getElementById('equals');

const addition = (a, b) => a + b;
const division = (a, b) => a / b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

const firstOperand = undefined;
const secondOperand = undefined;
const operator = undefined;

const operate = (firstOperand, secondOperand, operator) => {};

clearBtn.addEventListener('click', () => (display.textContent = 0));
divideBtn.addEventListener(
  'click',
  () => (display.textContent = '/')
);
sevenBtn.addEventListener('click', () => (display.textContent = 7));
eightBtn.addEventListener('click', () => (display.textContent = 8));
nineBtn.addEventListener('click', () => (display.textContent = 9));
multiplyBtn.addEventListener(
  'click',
  () => (display.textContent = 'x')
);
fourBtn.addEventListener('click', () => (display.textContent = 4));
fiveBtn.addEventListener('click', () => (display.textContent = 5));
sixBtn.addEventListener('click', () => (display.textContent = 6));
subtractBtn.addEventListener(
  'click',
  () => (display.textContent = '-')
);
oneBtn.addEventListener('click', () => (display.textContent = 1));
twoBtn.addEventListener('click', () => (display.textContent = 2));
threeBtn.addEventListener('click', () => (display.textContent = 3));
additionBtn.addEventListener(
  'click',
  () => (display.textContent = '+')
);
zeroBtn.addEventListener('click', () => (display.textContent = 0));
commaBtn.addEventListener('click', () => (display.textContent = ','));
backBtn.addEventListener('click', () => (display.textContent = ''));
equalsBtn.addEventListener(
  'click',
  () => (display.textContent = '=')
);
