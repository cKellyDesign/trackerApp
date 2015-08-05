define([
	'./inputTemplate',
	'./passwordTemplate',
	'./textAreaTemplate',
	'./submitBtnTemplate'
	], function(inputTemplate, passwordTemplate, textAreaTemplate, submitBtnTemplate){

	var loginTemplate = '<form role="form">' +

		'<h3 style="margin-bottom: 25px; text-align: center;"><%= formTitle %></h3>' +

    '<% _.each(inputs, function(field) { %>' + 
			
    	'<% if (field.type === "text") { %>' +
      		inputTemplate +
    	'<% } else if (field.type === "password") { %>' +
    			passwordTemplate +
      '<% } else if (field.type === "textarea") { %>' +
      		textAreaTemplate +
  		'<% } else if (field.type === "submit") { %>' +
      		submitBtnTemplate +
    	'<% } %>' + 

    '<% }); %>' +

	'</form>';
	return loginTemplate;
});