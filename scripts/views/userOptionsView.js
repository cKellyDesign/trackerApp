define(['templates/userOptionsTemplate'], function(userOptionsTemplate){
	var userOptionsView = Backbone.View.extend({

		template: _.template(userOptionsTemplate),

		initialize: function() {
			this.render();
			this.model.on('change', this.render, this);
		},
		render: function() {
			this.$el.html(this.template(this.model.attributes));
		}
	});
	return userOptionsView;
});