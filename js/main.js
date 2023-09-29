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


  
function onButtonClick() {
  console.log('onButtonPlusClick')
}
function onButtonClick() {
  console.log('onButtonPlusClick')
}
function onButtonClick() {
  console.log('onButtonPlusClick')
}
function onButtonClick() {
  console.log('onButtonPlusClick')
}

