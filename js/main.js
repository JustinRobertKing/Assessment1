var currentValue = 0;
var display = document.getElementById('display-score');
var input = document.getElementById('text-input');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');

plus.addEventListener('click', add);
minus.addEventListener('click', subtract);

function add(e) {
	e.preventDefault();
	currentValue += parseInt(input.value, 10);
	display.textContent = currentValue
	changeColor()
}

function subtract(e) {
	e.preventDefault();
	currentValue -= input.value;
	display.textContent = currentValue
	changeColor()
}

function changeColor() {
	if (currentValue >= 0) {
		display.style.color = 'black';
	} else {
		display.style.color = 'red';
	}
}