define([], function(){
	var submitBtnTemplate = '<button type="button" id="<%= field.slug %>" name="<%= field.slug %>" class="btn btn-primary <%= field.classes %> j-submit"><%= field.placeholder %></button>';
	return submitBtnTemplate;
});