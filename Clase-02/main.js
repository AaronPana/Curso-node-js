const { sumar, restar, mult, div } = require("./calculos");

let a = 12;
let b = 3;
let c = 0;

console.log('Suma:', sumar(a, b));
console.log('Resta:', restar(a, b));
console.log('Multiplicacion:', mult(a, b));
console.log('Division:', div(a, b));
console.log('Division por cero:', div(a, c));
