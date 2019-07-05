/*Jesus Quintal*/
/**/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RelFotoSchema = new Schema({


	idalojamiento :{
		type:Schema.Types.ObjectId,
		ref:'alojamiento'
	},
	idfoto:{
		type:Schema.Types.ObjectId,
		ref:'foto'
	}
},{collection:'relalojamientofoto',timestamps:true});

module.exports=mongoose.model('relalojamientofoto',RelFotoSchema);
