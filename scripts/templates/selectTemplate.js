define([], function(){
	var selectTemplate = '<div class="form-group <% if (field.size) { %> <%= field.size %> <% } %>">' +
		'<select id="<%= field.slug %>" class="formControl <%= field.classes %>">' +

			'<option value="" disabled><%= field.placeholder %></option>' +
			
			'<% _.each(field.options, function(option){ %>' +
				'<option value="<%= option %>"><%= option %></option>' +
			'<% }); %>' +
		
		'</select>' +
	'</div>';
	return selectTemplate;
});