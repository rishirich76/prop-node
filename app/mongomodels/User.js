/**
 * Created by rishimishra on 19/02/17.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


var UserSchema = new Schema({
	userid: {
		type: Number,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	state: {
		type: String,
		required: true
	},
	contactnumber: {
		type: String,
		required: true
	},
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Users',UserSchema);