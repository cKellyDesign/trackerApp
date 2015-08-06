define(['templates/newFormTemplate'], function(newFormTemplate){
	var newFormView = Backbone.View.extend({
		
		template : _.template(newFormTemplate),
		events : {
			'click #addNewField' : 'onAddNewField'
		},

		initialize: function() {
			this.render();
			this.model.on('change', this.render, this);
		}, 

		onAddNewField: function(e) {
			e.preventDefault();
			var inputs = _.clone(this.model.get('inputs'));

			var fieldValue = $('#newFieldValue').val();
			var fieldType = $('#typeDropdown').val();
			var fieldSlug = TrApp.slugify(fieldValue);
			
			inputs.push({
				'slug' : fieldSlug,
				'placeholder' : fieldValue,
				'type' : fieldType,
				'classes' : 'col-xs-12',
				'size' : 'col-xs-12'
			});

			this.model.set('inputs', inputs);
		},

		onSaveNewForm: function() {
			// todo: POST LOGIC GOES HERE
		},

		render: function() {
			this.$el.html(this.template(this.model.attributes));
		}

	});
	return newFormView;
});