define(['templates/userOptionsTemplate'], function(userOptionsTemplate){
	var userOptionsView = Backbone.View.extend({

		template: _.template(userOptionsTemplate),

		events: {
			'click #createForm' :'onCreateNewFormClick'
		},

		initialize: function() {
			this.render();
			this.model.on('change', this.render, this);
			TrApp.EventHub.on('userOpt:newForm', this.hideEl, this);
		},
		
		onCreateNewFormClick: function(e) {
			TrApp.EventHub.trigger('userOpt:newForm');
		},

		hideEl: function(e) {
			console.log("hiding El event: ", e);
			this.$el.hide();
		},



		render: function() {
			this.$el.html(this.template(this.model.attributes));
		}
	});
	return userOptionsView;
});