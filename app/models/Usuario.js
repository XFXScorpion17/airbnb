const mongoose = require('mongoose');
//const brcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
	cUsuario: {
		type: String,
		require: true
	},
	cPassword: {
		type: String,
		require: true
	},
	cNombre: {
		type: String,
		require: true
	},
	cPrimerApellido: {
		type: String,
		require: true
	},
	cSegundoApellido: {
		type: String,
		require: true
	},
	cCorreo: {
		type: String,
		require: true,
		unique: true
	},
	cSexo: {
		type: String,
		enum: ['H', 'M', 'O']
	},
	iTelefono: {
		type: Number
	},
	direccion: {
		type: Schema.Types.ObjectId,
		ref: 'direccion'
	},
	Perfil: {
		type: Schema.Types.ObjectId,
		ref: 'perfil'
	}
}, { collection: 'usuario', timestamps: true });

module.exports = mongoose.model('usuario', UsuarioSchema);