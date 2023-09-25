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



