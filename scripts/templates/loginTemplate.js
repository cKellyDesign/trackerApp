define([], function(){
	var loginTemplate = '<form role="form">' +
		'<h3 style="margin-bottom: 25px; text-align: center;" id="loginTitle">Log In</h3>' +
		'<h3 style="margin-bottom: 25px; text-align: center;" id="registerTitle" class="hidden">New User</h3>' +
		'<div class="form-group">' +
			'<input type="text" class="form-control" id="username" name="username" placeholder="Username" required>' +
		'</div>' +
		'<div class="form-group">' +
			'<input type="password" class="form-control" id="password" name="password" placeholder="Password" required>' +
		'</div>' +
		'<div class="form-group">' +
			'<input type="password" class="form-control hidden" id="passwordRe" name="passwordrepeat" placeholder="Repeat Password" required>' +
		'</div>' +
		'<button type="button" id="submit" name="submit" class="btn btn-primary pull-left">Log In</button>' +
		'<button type="button" id="newUser" name="newuser" class="btn btn-primary pull-right">New User</button>' + 
		'<button type="button" id="existingUser" name="existinguser" class="btn btn-primary pull-right center hidden">Existing User</buton>' +
		'<button type="button" id="register" name="register" class="btn btn-primary pull-left center hidden">Register</buton>' +

	'</form>';
	return loginTemplate;
});