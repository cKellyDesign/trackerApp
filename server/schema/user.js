var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userSchema = new Schema({
	username: { type: String, required: true, unique: true },
	name: { type: String, required: true },
	email: String,
	phone: Number,
	created_at: Date,
	updated_at: Date
});

userSchema.pre('save', function(next){
	var currDate = new Date();
	this.updated_at = currDate;
	if (!this.created_at) this.created_at = currDate;
	next();
});

module.exports = mongoose.model('User', userSchema);