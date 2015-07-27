define([], function(){
	var RootTemplate = '<section class="root_wrap">' +
		'<% _.each(forms, function(formSlug) { %>' +
			'<div class="j_form_wrap form-group">' +
				'<button class="j_initThisForm_btn btn btn-primary disabled" data-form-slug="<%= formSlug %>">Click Here to see <%= formSlug %></button>' +
			'</div>' +
		'<% }); %>' +
	'</section>';
	return RootTemplate;
});