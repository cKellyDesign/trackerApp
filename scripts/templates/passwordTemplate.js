define([], function(){
	var passwordTemplate = '<div class="form-group">' +
    '<input type="password" class="form-control j-input-text" id="<%= field.slug %>" name="<%= field.slug %>" placeholder="<%= field.placeholder %>" required>' +
  '</div>';
	return passwordTemplate;
});