define(['templates/loginTemplate'], function(loginTemplate){
	var LoginView = Backbone.View.extend({

		username: '',
		password: '',

		template: _.template(loginTemplate),

		events: {
			'click #logIn' : 'onSubmitLogin',
			'click #register' : 'onRegisterNewUser',
			'click #newUser' : 'onToggleFields',
			'click #existingUser' : 'onToggleFields',
		},

		initialize: function() {
			this.render();
			this.model.on('change reset', this.render, this);
		},
		onSubmitLogin: function(e) {
			e.preventDefault();
			var url = '/submitLogin';
			this.username = $('#username').val();
			this.password = $('#password').val();
			
			this.postForm(url);
		},
		onRegisterNewUser: function(e) {
			e.preventDefault();
			var thisPass = $('#password').val();
			var thisPassRe = $('#passwordRe').val();
			if (!thisPassRe || thisPass !== thisPassRe) {
				$('#password').val('');
				$('#passwordRe').val('');
				return;
			}
			var url = '/newUser';
			this.username = $('#username').val();
			this.password = thisPass;

			this.postForm(url);
		},
		postForm: function(url) {
			var self = this;
			var postData = { username: this.username, password: this.password };
			$.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(postData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) { self.onPostSuccess(data); },
        error: function(err) { self.onPostFail(err); }
      });
		},
		onPostSuccess: function(data){
			this.$el.html('');
			TrApp.EventHub.trigger('login:success', data);
			TrApp.setCookie("username", data.username);
		},
		onPostFail: function(err) {
			if (err.status === 404) {
				$('#username').attr('placeholder', err.responseJSON).val('');
				$('#password').val('');
				$('#passwordRe').val('');
			} else if (err.status === 403) {
				$('#password').attr('placeholder', err.responseJSON).val('');
			}
		},
		onToggleFields: function(e) {
			e.preventDefault();
			var theseInputs = _.clone(this.model.get('inputs'));
			var isLogin = theseInputs.length === 4; 

			if ( isLogin ) {
				theseInputs[3] = { 'slug':'existingUser', 'placeholder':'Existing User', 'type': 'submit', 'classes': 'pull-right' };
				theseInputs[2] = { 'slug':'register', 'placeholder':'Register', 'type': 'submit', 'classes': 'pull-left' };
				theseInputs.splice(2, 0, { 'slug' : 'passwordRe', 'placeholder' : 'Retype Password', 'type' : 'password' });
				this.model.set('formTitle', 'New User');
				this.model.set('inputs', theseInputs);
			} else {
				this.model.clear({ silent: true }).set(this.model.defaults);
			}
		},
		render: function() {
			this.$el.html(this.template(this.model.attributes));
		}
	});
	return LoginView;
});