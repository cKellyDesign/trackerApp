define(['templates/loginTemplate'], function(loginTemplate){
	var LoginView = Backbone.View.extend({
		// template: _.template(loginTemplate),
		template: loginTemplate,
		events: {
			'click #submit' : 'onSubmitLogin',
			'click #register' : 'onRegisterNewUser',
			'click #newUser' : 'onToggleFields',
			'click #existingUser' : 'onToggleFields'
		},
		initialize: function() {
			this.render();	
		},
		onSubmitLogin: function(e) {
			e.preventDefault();

		},
		onRegisterNewUser: function(e) {

		},
		onLoginSuccess: function(){

		},
		onLoginFail: function() {

		},
		onToggleFields: function(e) {
			e.preventDefault();
			$('#existingUser').toggleClass('hidden');
			$('#register').toggleClass('hidden');
			$('#submit').toggleClass('hidden');
			$('#newUser').toggleClass('hidden');
			$('#passwordRe').toggleClass('hidden');
			$('#loginTitle').toggleClass('hidden');
			$('#registerTitle').toggleClass('hidden');
		},
		render: function() {
			this.$el.html(this.template);
		}
	});
	return LoginView;
});