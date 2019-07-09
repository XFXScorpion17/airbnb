const AlojamientoModel =  require('../models/Alojamiento');
const DireccionModel =  require('../models/Direccion');
const UsuarioModel = require('../models/Usuario');
const TipoAlojamientoModel = require('../models/TipoAlojamiento');
const ServicioModel = require('../models/Servicio');

//#region Alojamiento
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
//#end region

//#region Tipo Alojamiento
/**
 * Función para obtener todos los tipos de alojamientos.
 * @param {*} root 
 * @param {*} params 
 * @param {*} context 
 * @param {*} info 
 */
const listTipoAlojamientos = async (root, params, context, info) => {

	const tipodealojamiento = await  TipoAlojamientoModel.find({});

	return tipodealojamiento;
};
//#endregion

//#region Direccion
const listDirecciones = async (root, params, context, info) => {

	const direcciones = await  DireccionModel.find({});

	return direcciones;
};
//#region

//#region Usuarios
/**
 * Función 
 * @param {*} root 
 * @param {*} params 
 * @param {*} context 
 * @param {*} info 
 */
const listUsuarios = async (root, params, context, info) => {

	const usuarios = await  UsuarioModel.find({});

	return usuarios;
};
//#region

//#Servicio
/**
 * Función para obtener todos los servicios.
 * @param {*} root 
 * @param {*} params 
 * @param {*} context 
 * @param {*} info 
 */
const listServicios = async (root, params, context, info) => {

	const servicio = await  ServicioModel.find({});

	return servicio;
};
//#endregion


module.exports = {
	listAlojamientos,
	listTipoAlojamientos,
	listDirecciones,
	listUsuarios,
	listServicios
};
