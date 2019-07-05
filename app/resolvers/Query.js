const AlojamientoModel =  require('../models/Alojamiento');

/**
 * Función para obtener todos los alojamientos.
 * @param {*} root 
 * @param {*} params 
 * @param {*} context 
 * @param {*} info 
 */
const listAlojamientos = async (root, params, context, info) => {

	const authors = await AlojamientoModel.find({});

	return authors;
};

module.exports = {
	listAlojamientos
};