function calcularPromedio(numeros) {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    let promedio = suma / numeros.length;

    return promedio;
}

let lista_numeros = [5, 8, 2, 10, 4];
let resulado = calcularPromedio(lista_numeros);
console.log("El promedio de la lista es:", resulado);
