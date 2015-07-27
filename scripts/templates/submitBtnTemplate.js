define([], function(){
	var submitBtnTemplate = '<button type="button" id="submit" name="<%= field.slug %>" class="btn btn-primary pull-right"><%= field.placeholder %></button>';
	return submitBtnTemplate;
});