define(['templates/loginTemplate'], function(loginTemplate){
	var LoginView = Backbone.View.extend({

		username: '',
		password: '',

		template: loginTemplate,

		events: {
			'click #submit' : 'onSubmitLogin',
			'click #register' : 'onRegisterNewUser',
			'click #newUser' : 'onToggleFields',
			'click #existingUser' : 'onToggleFields',
		},

		initialize: function() {
			this.render();	
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
			$('#existingUser').toggleClass('hidden');
			$('#register').toggleClass('hidden');
			$('#submit').toggleClass('hidden');
			$('#newUser').toggleClass('hidden');
			$('#passwordRe').toggleClass('hidden').val('');
			$('#username').val('');
			$('#password').val('');
			$('#loginTitle').toggleClass('hidden');
			$('#registerTitle').toggleClass('hidden');
		},
		render: function() {
			this.$el.html(this.template);
		}
	});
	return LoginView;
});