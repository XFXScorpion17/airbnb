const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TipoAlojamiento = new Schema({
	descripcion: {
		type: String
	}
});

module.exports = mongoose.model('tipoalojamiento', TipoAlojamiento);