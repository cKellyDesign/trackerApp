define([], function(){
	var LoginModel = Backbone.Model.extend({
		defaults: {
			'formName' : 'logIn',
			'formTitle' : 'Log In',
			'inputs' : [{
				'slug' : 'username',
				'placeholder' : 'Username',
				'type' : 'text'
			}, {
				'slug' : 'password',
				'placeholder' : 'Password',
				'type' : 'password'
			}, {
				'slug' : 'logIn',
				'placeholder' : 'Log In',
				'type' : 'submit',
				'classes' : 'pull-left'
			}, {
				'slug' : 'newUser',
				'placeholder' : 'New User',
				'type' : 'submit',
				'classes' : 'pull-right'
			}]
		}
	});
	return LoginModel;
});