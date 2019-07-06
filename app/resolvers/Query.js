const AlojamientoModel =  require('../models/Alojamiento');
const DireccionModel =  require('../models/Direccion');
const UsuarioModel = require('../models/Usuario');

/**
 * Función para obtener todos los alojamientos.
 * @param {*} root 
 * @param {*} params 
 * @param {*} context 
 * @param {*} info 
 */
const listAlojamientos = async (root, params, context, info) => {

	const alojamientos = await AlojamientoModel.find({});

	return alojamientos;
};


//#region Direccion
const listDirecciones = async (root, params, context, info) => {

	const direcciones = await  DireccionModel.find({});

	return direcciones;
};
//#region

//#region Usuarios
const listUsuarios = async (root, params, context, info) => {

	const usuarios = await  UsuarioModel.find({});

	return usuarios;
};
//#region

module.exports = {
    listAlojamientos,
    listDirecciones,
    listUsuarios
};
