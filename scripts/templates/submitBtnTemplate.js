define([], function(){
	var submitBtnTemplate = '<div class="form-group <% if (field.size) { %> <%= field.size %> <% } %>">' +
		'<button type="button" id="<%= field.slug %>" name="<%= field.slug %>" class="btn btn-primary <%= field.classes %> j-submit"><%= field.placeholder %></button>' +
	'</div>';
	return submitBtnTemplate;
});