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
				'placeholder' : 'Field Value (comma sperated if select)',
				'type' : 'text',
				'classes' : 'j-newFieldValue',
				'size' : 'col-xs-6'
			}, {
				'slug' : 'typeDropdown',
				'placeholder' : 'Type',
				'type' : 'select',
				'options' : ["text", "password", "textarea", "submit"],
				'classes' : 'j-newFieldType col-xs-12',
				'size' : 'col-xs-6'
			}, {
				'slug' : 'addNewField',
				'placeholder' : 'Add New Field',
				'type' : 'submit',
				'classes' : 'j-addNewField col-xs-12',
				'size' : 'col-xs-12'
			}, {
				'slug' : 'saveForm',
				'placeholder' : 'Save New Form',
				'type' : 'submit',
				'classes' : 'j-saveForm col-xs-12',
				'size' : 'col-xs-12'
			}]
		}
	});
	return newFormModel;
});