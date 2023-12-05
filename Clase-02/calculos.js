function sumar(a, b) {
	return a + b;
}

function restar(a, b) {
	return a - b;
}

function mult(a, b) {
	return a * b;
}

function div(a, b) {
	return b !== 0 ? a / b : 0;
}

module.exports = { sumar, restar, mult, div };
