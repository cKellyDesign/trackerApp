define([], function(){
	var selectTemplate = '<div class="form-group <% if (field.size) { %> <%= field.size %> <% } %>">' +
		'<select class="formControl <%= field.classes %>">' +

			'<option value="" disabled selected><%= field.placeholder %></option>' +
			
			'<% _.each(field.options, function(option){ %>' +
				'<option value="<%= option %>"><%= option %></option>' +
			'<% }); %>' +
		
		'</select>' +
	'</div>';
	return selectTemplate;
});