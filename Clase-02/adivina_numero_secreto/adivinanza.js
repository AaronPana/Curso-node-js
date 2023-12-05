const generarNumeroAleatorio = () => {
	return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
	if (numeroAdivinado === numeroSecreto) {
		console.log(">> ¡Felicitaciones, adivinaste el número secreto!");
	} else if (numeroAdivinado > numeroSecreto) {
		console.log(">> El número secreto es menor. ¡sigue intentando!");
	} else if (numeroAdivinado < numeroSecreto) {
		console.log(">> El número secreto es mayor. ¡sigue intentando!");
	}
};

module.exports = {
	generarNumeroAleatorio,
	verificarAdivinanza,
};
