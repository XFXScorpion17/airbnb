const AlojamientoModel = require('../models/Alojamiento');

/**
 * Función para crear un alojamiento.
 * @param {*} root 
 * @param {*} params 
 * @param {*} context 
 * @param {*} info 
 */
const createAlojamiento = async (root, params, context, info) => {

	const Alojamiento = await AlojamientoModel.create(params.data)
		.catch(e => { throw new Error(e.message); });

	if (!Alojamiento) throw new Error('No se creo el Alojamiento');

	return Alojamiento.toObject();
};

module.exports = {
	createAlojamiento
};