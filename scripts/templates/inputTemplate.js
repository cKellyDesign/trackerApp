define([], function(){
	var inputTemplate = '<div class="form-group">' +
    '<input type="text" class="form-control j-input-text" id="<%= field.slug %>" name="<%= field.slug %>" placeholder="<%= field.placeholder %>" required>' +
  '</div>';
	return inputTemplate;
});