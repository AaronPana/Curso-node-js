const pc = require("picocolors");
const Chance = require("chance");

const chance = new Chance();

const randomName = chance.name();
const randomAge = chance.age();
const randomEmail = chance.email();
// const randomTwitter = chance.twitter();
// const randomUrl = chance.url();
// const randomZip = chance.zip();

console.log(
	`${pc.bold("Nombre:")} ${pc.yellow(randomName)} | ${pc.bold(
		"Edad:"
	)} ${pc.green(randomAge)} | ${pc.bold("Email:")} ${pc.blue(randomEmail)}`
);

for (let i = 0; i < 3; i++) {
	console.log(chance.name().split(' ')[0], chance.age());
}
