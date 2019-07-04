const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DireccionSchema = new Schema({
	cCalle:{
		type:String,
	},
	cColonia:{
		type:String,
	},
	cEstado:{
		type:String,
	},
	cNumero:{
		type:String,
	},
	cPais:{
		type:String,
	},
},{collection:'Direccion',timestamps:true});

module.exports=mongoose.model('Direccion',DireccionSchema);