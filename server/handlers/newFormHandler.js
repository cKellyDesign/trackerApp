var  _ = require('underscore'),
	mongoose = require('mongoose');
	// FormModel = require('./../schema/formFields').FormModel,
	// InputField = require('./../schema/formFields').InputField;

module.exports = function init(Models){
	// db.on("error", function(errorObject){
	//   console.log(errorObject); 
	//   console.log('ONERROR');
	// });
	var FormModel = Models.FormModel;
	var InputField = Models.InputField;

	return function newForm (req, res, next) {
		var username = req.body.username;
		console.log("\n\nNEW FORM POSTED BY: ", req.body.username, "\n\n");

		var formData = {
			formName : req.body.formName,
			// formTitle : req.body.formTitle,
			author : req.body.username,
			fields : _.map(req.body.fields, function(input){
				return new InputField({
					placeholder : input.placeholder,
					slug : input.slug,
					type : input.type,
					classes : input.classes
				});
			})
		};

		console.log("\n\nformData: ", formData);
		new FormModel(formData).save(function(err, product, numberAffected){
			console.log("SAVE CALLBACK", product);
			res.status(200).send(formData);
			next();
		});
	};
};