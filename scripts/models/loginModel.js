define([], function(){
	var LoginModel = Backbone.Model.extend({
		defaults: {
			'formName' : 'logIn',
			'formTitle' : 'Log In',
			'fields' : [{
				'slug' : 'username',
				'placeholder' : 'Username',
				'type' : 'text'
			}, {
				'slug' : 'password',
				'placeholder' : 'Password',
				'type' : 'text'
			}, {
				'slug' : 'logIn',
				'placeholder' : 'Log In',
				'type' : 'submit'
			}, {
				'slug' : 'newUser',
				'placeholder' : 'New User',
				'type' : 'submit'
			}];
		}
	});
	return LoginModel;
});