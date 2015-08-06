define([], function(){
	var newFormModel = Backbone.Model.extend({
		defaults : {
			formTitle : 'Create New Form',
			inputs : [{
				'slug' : 'formName',
				'placeholder' : 'Form Name (example: My Form)',
				'type' : 'text',
				'classes' : 'required',
				'size' : 'col-xs-12'
			}],
			actionables : [{
				'slug' : 'newFieldValue',
				'placeholder' : 'Field Title',
				'type' : 'text',
				'classes' : 'required',
				'size' : 'col-xs-6'
			}, {
				'slug' : 'typeDropdown',
				'placeholder' : 'Type',
				'type' : 'select',
				'options' : ["text", "password", "textarea", "submit"],
				'classes' : 'col-xs-12 required',
				'size' : 'col-xs-6'
			}, {
				'slug' : 'addNewField',
				'placeholder' : 'Add New Field',
				'type' : 'submit',
				'classes' : 'col-xs-12',
				'size' : 'col-xs-12'
			}, {
				'slug' : 'saveForm',
				'placeholder' : 'Save New Form',
				'type' : 'submit',
				'classes' : 'col-xs-12',
				'size' : 'col-xs-12'
			}]
		}
	});
	return newFormModel;
});