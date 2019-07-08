const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TipoAlojamiento = new Schema({
	descripcion: {
		type: String
	}
}, { collection: 'tipoalojamientos', timestamps: true });

module.exports = mongoose.model('tipoalojamientos', TipoAlojamiento);