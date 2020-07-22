var numbers = document.querySelectorAll('.number');
var cadreR = document.querySelector('.cadreR');

var operator = ['/', '*', '+', '-', '%'];

var operation = '';

numbers.forEach(function (number) {
  number.addEventListener('click', () => {
    operation = String(operation + number.getAttribute('data-calc'));
    cadreR.textContent = operation;

    operator.forEach(function (i) {
      if (operation[0] === i) {
        reset();
        cadreR.textContent = 'You Break it !';
      }
    });

  });

});

function Delete() {
  operation = operation.substring(0, operation.length - 1);
  cadreR.textContent = operation;

  if (operation === '') {
    cadreR.textContent = '0';
  }
}

function reset() {
  operation = '';
  cadreR.textContent = '0';
}

function calculate() {
  for (var i = 0; i < operation.length; i++) {
    if (operation[i] === '%') {
      operation = operation.replace('%', '') / 100;
    }
  }

  resultat = eval(operation);

  cadreR.textContent = resultat;
  operation = '';
}