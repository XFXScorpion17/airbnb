const mongoose = require('mongoose');
//const brcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
	cUsuario:{
		type:String,
		require:true
	},
	cPassword :{
		type:String,
		require:true
	},
	cNombre:{
		type:String,
		require:true
	},
	cPrimerApellido:{
		type :String,
		require:true
	},
	cSegundoApellido:{
		type:String,
		require:true
	},
	cCorreo:{
		type:String,
		require:true,
		unique:true
	},
	cSexo:{
		type:String,
		enum:['H','M','O']
	},
	iTelefono:{
		type:Number
	},
	cDireccion:{
		type:Schema.Types.ObjectId,
		ref:'Direccion'
	},
	Perfil:{
		type:Schema.Types.ObjectId,
		ref:'Perfil'		
	}
},{collection:'Usuario',timestamps:true});

module.exports=mongoose.model('Usuario',UsuarioSchema);