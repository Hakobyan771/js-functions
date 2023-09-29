function addErrorClass(elementId) {
  var element = document.getElementById(elementId)
  element.className = 'error-input'
}

function addErrorClassToAllInputs() {
  addErrorClass('first-name');
  addErrorClass('last-name');
  addErrorClass('adress');
}



let sentButton = document.getElementById('send-button')

sentButton.addEventListener('click', addErrorClassToAllInputs)

function onFirstNmaeKeyup() {
  addErrorClass('first-name')
}

var firstNammeEl = document.getElementById('first-name');

firstNammeEl.addEventListener('keyup', onFirstNmaeKeyup)

var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiplay = document.getElementById('buttonMultiplay');
var buttonDevide = document.getElementById('buttonDevide');


  
function onButtonPlusClick() {
  var input1 = document.getElementById('number1');
  var input2 = document.getElementById('number2');

  var number1 = Number(input1.value);
  var number2 = Number(input2.value);

  var summ = number1 + number2;
  window.alert(summ);
}
function onButtonMinusClick() {
  var input1 = document.getElementById('number1');
  var input2 = document.getElementById('number2');

  var number1 = Number(input1.value);
  var number2 = Number(input2.value);

  var summ = number1 - number2;
  window.alert(summ);
}
function onButtonMultiplayClick() {
  var input1 = document.getElementById('number1');
  var input2 = document.getElementById('number2');

  var number1 = Number(input1.value);
  var number2 = Number(input2.value);

  var summ = number1 * number2;
  window.alert(summ);
}
function onButtonDevideClick() {
  var input1 = document.getElementById('number1');
  var input2 = document.getElementById('number2');

  var number1 = Number(input1.value);
  var number2 = Number(input2.value);

  var summ = number1 / number2;
  window.alert(summ);
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiplay.addEventListener('click', onButtonMultiplayClick);
buttonDevide.addEventListener('click', onButtonDevideClick);

