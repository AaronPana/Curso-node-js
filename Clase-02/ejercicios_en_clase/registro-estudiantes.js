const readlineSync = require("readline-sync");
const pc = require("picocolors");

const registrarEstudiantes = () => {
	console.log(pc.bgMagenta(pc.black(">> Iniciando registro de estudiantes...\n")));

	let cantidadEstudiantes = parseInt(
		readlineSync.question(
			pc.bold("-- Ingresar la cantidad de estudiantes a registrar: ")
		)
	);

	console.log(pc.red("____________________________________________________"));

	let estudiantes = [];

	for (let i = 0; i < cantidadEstudiantes; i++) {
		let nombreEstudiante = readlineSync.question(
			pc.bold(`Ingrese el nombre del estudiante ${i + 1}: `)
		);
		let edadEstudiante = parseInt(
			readlineSync.question(pc.bold(`Ingrese la edad de ${nombreEstudiante}: `))
		);

		console.log(pc.bold("Nombre:"), pc.yellow(nombreEstudiante), pc.bold("| Edad:"), pc.yellow(edadEstudiante));
		console.log(pc.red("____________________________________________________"));

		let estudiante = {
			nombre: nombreEstudiante,
			edad: edadEstudiante,
		};

		estudiantes.push(estudiante);
	}

	console.log(pc.bgMagenta(pc.black("\n>> Cantidad de estudiantes registrados:")), pc.magenta(estudiantes.length));

	return estudiantes;
};

const mostrarListaEstudiantes = (estudiantes) => {
	console.log(pc.magenta("\n--------- Lista de estudiantes registrados ---------"));

	for (let estudiante of estudiantes) {
		console.log(`${pc.bold('Nombre:')} ${pc.yellow(estudiante.nombre)} ${pc.bold('| Edad:')} ${pc.yellow(estudiante.edad)}`);
	}
};

let listaEstudiantes = registrarEstudiantes();
mostrarListaEstudiantes(listaEstudiantes);
