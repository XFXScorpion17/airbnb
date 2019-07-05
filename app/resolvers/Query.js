const AlojamientoModel =  require('../models/Alojamiento');
const DireccionModel =  require('../models/Direccion');

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

//#region Direccion
const listDirecciones = async (root, params, context, info) => {

	const direcciones = await  DireccionModel.find({});

	return direcciones;
};
//#region

module.exports = {
    listAlojamientos,
    listDirecciones
};
