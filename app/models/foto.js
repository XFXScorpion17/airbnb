//Jesus
/*Jesus Quintal*/
/**/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FotoSchema = new Schema({
	cTitulo: {
		type: String,
	},
	cImagen: {
		type: String,
	}
}, { collection: 'foto', timestamps: true });

module.exports = mongoose.model('foto', FotoSchema);