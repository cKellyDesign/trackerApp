define([
	'./formLoop',
	'./inputTemplate',
	'./submitBtnTemplate',
	'./selectTemplate'
	], function (formLoop, inputTemplate, submitBtnTemplate, selectTemplate){
	var newFormModel = '<form role="form" class="row">' +

		'<h3 style="margin-bottom: 25px; text-align: center;"><%= formTitle %></h3>' +

		formLoop +

		'<% _.each(actionables, function(field) { %>' +
			'<% if (field.type === "text") { %>' +
	    		inputTemplate +
	  	'<% } else if (field.type === "select") { %>' +
	  			selectTemplate +
			'<% } else if (field.type === "submit") { %>' +
	    		submitBtnTemplate +
	  	'<% } %>' +
		'<% }); %>' +
	'</form>';
	return newFormModel;
});