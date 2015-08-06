var  _ = require('underscore'),
	mongoose = require('mongoose'),
	FormModel = require('./../schema/formFields').FormModel,
	InputField = require('./../schema/formFields').InputField;

module.exports = function init () {
	return function newForm (req, res, next) {
		var username = req.params.username;
		var formData = {
			formName : req.params.formName,
			formTitle : req.params.formTitle,
			author : username,
			fields : _.map(req.params.inputs, function(input){
				return new InputField({
					placeholder : input.placeholder,
					type : input.type,
					classes : input.classes
				}).save();
			})
		};

		console.log("\n\nformData: ", formData);
		// new FormModel(formData).save();
		res.status(200).send(formData);
		next();
	};
}