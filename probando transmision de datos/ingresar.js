var inputElement = document.getElementById('myInput');
var buttonElement = document.getElementById('myButton');

buttonElement.addEventListener('click', function(event) {
  event.preventDefault();
  var inputValue = inputElement.value;
  console.log('Valor ingresado:' + inputValue);
});
