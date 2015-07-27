define([
	'./inputTemplate',
	'./textAreaTemplate',
	'./submitBtnTemplate'], function(inputTemplate, textAreaTemplate, submitBtnTemplate){
	
	var RootTemplate = '<div class="col-md-5">' +
    '<div class="form-area">' +
      '<form name="<%= formName %> role="form"><br style="clear:both">' +

        '<h3 style="margin-bottom: 25px; text-align: center;"><%= formTitle %></h3>' +

        '<% _.each(inputs, function(field) { %>' + 
 				
 					// '<%= field.type %>' +
        	'<% if (field.type === "text") { %>' +
	        		inputTemplate +
	        '<% } else if (field.type === "textarea") { %>' +
	        		textAreaTemplate +
      		'<% } else if (field.type === "submit") { %>' +
	        		submitBtnTemplate +
        	'<% } %>' + 

        '<% }); %>' +

      '</form>' +
    '</div>' +
  '</div>';
	return RootTemplate;
});