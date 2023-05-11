var number = document.querySelector('.number');
var decreaseBtn = document.querySelector('#decrease');
var resetBtn = document.querySelector('#reset');
var increaseBtn = document.querySelector('#increase');

var counter = 0;

function updateNumber() {
  number.textContent = counter;
  
  if (counter === 0) {
    number.classList.remove('positive');
    number.classList.remove('negative');
    number.classList.add('zero');
  } else if (counter > 0) {
    number.classList.remove('zero');
    number.classList.remove('negative');
    number.classList.add('positive');
  } else {
    number.classList.remove('zero');
    number.classList.remove('positive');
    number.classList.add('negative');
  }
}

function decrease() {
  counter--;
  updateNumber();
}

function reset() {
  counter = 0;
  updateNumber();
}

function increase() {
  counter++;
  updateNumber();
}

decreaseBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);
increaseBtn.addEventListener('click', increase);
