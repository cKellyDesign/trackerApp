define(['templates/newFormTemplate'], function(newFormTemplate){
	var newFormView = Backbone.View.extend({
		
		template : _.template(newFormTemplate),
		events : {

		},

		initialize: function() {
			console.log("INIT NEW FORM", this.$el);
			this.render();
		}, 

		render: function() {
			this.$el.html(this.template(this.model.attributes));
		}

	});
	return newFormView;
});