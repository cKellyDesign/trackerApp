define([
	'templates/rootTemplate',
	'views/formView',
	'models/formModel'], function(rootTemplate, formView, formModel){
	var RootView = Backbone.View.extend({

		template: _.template(rootTemplate),

		events: {
			'click .j_initThisForm_btn': 'initForms'
		},

		initialize: function() {
			this.render();
		},

		initForms: function() {
			_.each($('.j_form_wrap', this.$el), function(formEle){
				var data = $('.j_initThisForm_btn', formEle).data('form-boot');
				var newForm = new formView({
					el: $(formEle),
					model: new formModel(JSON.parse(decodeURI(data)))
				});
			});
		},

		render: function() {
			this.$el.html(this.template());
			return this;
		}

	});
	return RootView;
});