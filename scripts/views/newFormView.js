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
			console.log("\n\n", fieldType, "\n\n");
			var fieldSlug = TrApp.slugify(fieldValue);
			
			inputs.push({
				'slug' : fieldSlug,
				'placeholder' : fieldValue,
				'type' : fieldType,
				'classes' : 'col-xs-12',
				'size' : 'col-xs-12'
			});

			console.log("ABOUT TO SET INPUTS: ", inputs);

			this.model.set('inputs', inputs);
		},

		render: function() {
			console.log("Rendering NEW FORM", this.model.attributes.inputs);

			this.$el.html(this.template(this.model.attributes));
		}

	});
	return newFormView;
});