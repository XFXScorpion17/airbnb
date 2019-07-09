const AlojamientoModel = require('../models/Alojamiento');
const TipoAlojamientoModel = require('../models/TipoAlojamiento');
const ServicioModel = require('../models/Servicio');

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

/**
 * Función para crear un tipo de alojamiento
 * @param {*} root 
 * @param {*} params 
 * @param {*} context 
 * @param {*} info 
 */
const createTipoAlojamiento = async (root, params, context, info) => {

	const TipoAlojamiento = await TipoAlojamientoModel.create(params.data)
		.catch(e => { throw new Error(e.message); });

	if (!TipoAlojamiento) throw new Error('No se creo el Alojamiento');

	return TipoAlojamiento.toObject();
};

/**
 * Función para crear un servicio.
 * @param {*} root 
 * @param {*} params 
 * @param {*} context 
 * @param {*} info 
 */
const createServicio = async (root, params, context, info) => {

	const Servicio = await ServicioModel.create(params.data)
		.catch(e => { throw new Error(e.message); });

	if (!Servicio) throw new Error('No se creo el Alojamiento');

	return Servicio.toObject();
}

module.exports = {
	createAlojamiento,
	createTipoAlojamiento,
	createServicio
};