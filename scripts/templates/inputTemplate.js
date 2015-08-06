define([], function(){
	var inputTemplate = '<div class="form-group <% if (field.size) { %> <%= field.size %> <% } %>">' +
    '<input type="text" class="form-control j-input-text <% if (field.classes) { %> <%= field.classes %> <% } %>" id="<%= field.slug %>" name="<%= field.slug %>" placeholder="<%= field.placeholder %>" required>' +
  '</div>';
	return inputTemplate;
});