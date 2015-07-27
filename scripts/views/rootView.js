define([
	'templates/rootTemplate'], function(rootTemplate){
	var RootView = Backbone.View.extend({

		// todo: move into Form View Object
		charMax: 140,

		template: _.template(rootTemplate),

		events: {
			'keydown #message': 'checkMessageLength'
		},

		initialize: function() {
			this.render();
		},

		setElements: function() {
			this.messageBox = $('#message');
			this.charLeft = $('#characterLeft');
			$(this.charLeft).text('140 characters left');
		},

		checkMessageLength: function() {
			var currValLength = $(this.messageBox).val().length;

			if (currValLength >= this.charMax) {
				$(this.charLeft).text('You have reached the limit.');
				$(this.messageBox).addClass('red').addClass('disabled');
			} else {
				var remainingLength = this.charMax - currValLength;
				$(this.charLeft).text(remainingLength + ' characters left.');
				$(this.messageBox).removeClass('disabled').removeClass('red');
			}
		},

		render: function() {
			this.$el.html(this.template(this.model.attributes));
			this.setElements();
			return this;
		}

	});
	return RootView;
});