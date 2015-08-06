var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	Helper = require('./../helpers/utils');

// Input Field
var inputSchema = new Schema({
	placeholder : { type: String, required: true },
	slug : String
});
inputSchema.pre('save', function (next){
	if (!this.slug) {
		Helper.slugify(this.placeholder);
	}
	next();
});
var inputField = mongoose.model('InputField', inputSchema);

// Password Field
var passwordSchema = new Schema({
	placeholder : String
});

// Textarea


// Buttons


module.exports = {
	'inputField' : inputField
};

