var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	username: { type: String, required: true, unique: true },
	email: String,
	phone: Number,
	created_at: Date,
	updated_at: Date
});

userSchema.pre('save', function(next) {
	var currDate = new Date();
	this.updated_at = currDate;
	if (!this.created_at) this.created_at = currDate;
	next();
});

module.exports = mongoose.model('User', userSchema);