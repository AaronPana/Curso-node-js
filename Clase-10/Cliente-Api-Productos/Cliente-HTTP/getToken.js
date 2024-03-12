const axios = require("axios");

require("dotenv").config();

// Configuración de Auth0
const auth0Domain = process.env.AUTH0_DOMAIN;
const clientId = process.env.AUTH0_CLIENT_ID;
const clientSecret = process.env.AUTH0_CLIENT_SECRET;
const audience = process.env.AUTH0_AUDIENCE;

// URL de Auth0 para obtener el token B2B
const auth0TokenUrl = `https://${auth0Domain}/oauth/token`;

// Función para obtener el token B2B de Auth0 utilizando async/await
module.exports.getB2BToken = async () => {
	try {
		const response = await axios.post(auth0TokenUrl, {
			grant_type: "client_credentials",
			client_id: clientId,
			client_secret: clientSecret,
			audience: audience,
		});

		if (response.status === 200) {
			const accessToken = response.data.access_token;
			return accessToken;
		} else {
			throw new Error("Error al obtener el token B2B");
		}
	} catch (error) {
		console.error("Error al obtener el token B2B:", error.message);
		throw error;
	}
};
