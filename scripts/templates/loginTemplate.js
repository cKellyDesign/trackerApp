define([
	'./formLoop'
	], function(formLoop){

	var loginTemplate = '<form role="form">' +

		'<h3 style="margin-bottom: 25px; text-align: center;"><%= formTitle %></h3>' +

    formLoop +

	'</form>';
	return loginTemplate;
});