var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	Helper = require('./../helpers/utils');

// Input Schema
var inputSchema = new Schema({
	placeholder : { type: String, required: true },
	slug : String,
	type : { type: String, required: true },
	classes : String
});

inputSchema.pre('save', function (next) {
	if (!this.slug) {
		this.slug = Helper.slugify(this.placeholder);
	}
	next();
});

var inputField = mongoose.model('InputField', inputSchema);

inputField.schema.path('type').validate(function(value){
	return /text|password|textarea|submit/i.test(vaule);
}, 'Invalid Field Type');

// Form Schema
var formSchema = new Schema({
	formName : { type: String, required: true },
	formTitle : String,
	slug : String,
	fields : [{ type: Schema.Types.ObjectId, ref: 'InputField' }],
	author : String
});

formSchema.pre('save', function (next) {
	if(!this.slug) {
		this.slug = Helper.slugify(this.placeholder);
	}
	next();
});

var form = mongoose.model('Form', formSchema);

module.exports = {
	'InputField' : inputField,
	'Form' : form
};

