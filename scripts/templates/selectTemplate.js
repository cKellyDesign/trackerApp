define([], function(){
	var selectTemplate = '<div class="form-group">' +
		'<select class="formControl <%= field.classes %>">' +

			'<option value="" disabled selected><%= field.placeholder %></option>' +
			
			'<% _.each(field.options, function(option){ %>' +
				'<option value="<%= option %>"><%= option %></option>' +
			'<% }); %>' +
		
		'</select>' +
	'</div>';
	return selectTemplate;
});