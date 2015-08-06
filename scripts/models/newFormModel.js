define([], function(){
	var newFormModel = Backbone.Model.extend({
		defaults : {
			formTitle : 'Create New Form',
			inputs : [{
				'slug' : 'formName',
				'placeholder' : 'Form Name (example: My Form)',
				'type' : 'text',
				'classes' : 'required'
			}],
			actionables : [{
				'slug' : 'newField',
				'placeholder' : 'Add New Field',
				'type' : 'submit',
				'classes' : 'col-xs-6'
			}, {
				'slug' : 'typeDropdown',
				'placeholder' : 'Type',
				'type' : 'select',
				'options' : ["text", "password", "textarea", "submit"],
				'classes' : 'col-xs-6'
			}, {
				'slug' : 'saveForm',
				'placeholder' : 'Save New Form',
				'type' : 'submit',
				'classes' : 'col-xs-12'
			}]
		}
	});
	return newFormModel;
});