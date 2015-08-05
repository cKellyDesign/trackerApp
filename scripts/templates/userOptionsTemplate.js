define(['./formLoop'], function(formLoop){
	var userOptionsTemplate = '<form role="form" class="row">' +

		formLoop +

	'</form>';
	return userOptionsTemplate;
});