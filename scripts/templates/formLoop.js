define([
	'./inputTemplate',
	'./passwordTemplate',
	'./textAreaTemplate',
	'./submitBtnTemplate',
	'./selectTemplate',
	], function(inputTemplate, passwordTemplate, textAreaTemplate, submitBtnTemplate, selectTemplate){

	var formLoop = '<% _.each(inputs, function(field) { %>' + 
		
  	'<% if (field.type === "text") { %>' +
    		inputTemplate +
  	'<% } else if (field.type === "password") { %>' +
  			passwordTemplate +
  	'<% } else if (field.type === "select") { %>' +
  			selectTemplate +
    '<% } else if (field.type === "textarea") { %>' +
    		textAreaTemplate +
		'<% } else if (field.type === "submit") { %>' +
    		submitBtnTemplate +
  	'<% } %>' + 

  '<% }); %>';

	return formLoop;
});