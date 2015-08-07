define(['templates/newFormTemplate'], function(newFormTemplate){
	var newFormView = Backbone.View.extend({
		
		template : _.template(newFormTemplate),
		events : {
			'click #addNewField' : 'onAddNewField',
			'click #saveForm' :  'onSaveNewForm'
		},

		initialize: function() {
			this.render();
			this.username = this.model.get('username');
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

		onSaveNewForm: function(e) {
			e.preventDefault();

			var newFields = $('.j-newFormFields .form-control');

      var messageData = {
      	username: this.username,
      	formName: $('.newFormTitle', this.$el).val(),
      	// formTitle : ,
      	author: this.username,
      	fields: _.map(newFields, function (field) {
      		return {
      			placeholder : $(field).val(),
      			slug: $(field).attr('id'),
      			type: $(field).attr('type'),
      			classes: $(field).attr('class'),
      			size: $(field).parent().attr('class').replace('control-group ', '')
      		};
      	})
      };

      console.log(messageData);
			this.saveNewForm(messageData);
		},

		saveNewForm: function(postData) {
			var self = this;
			var url = '/newForm';
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

		onPostSuccess: function() {
			console.log('POST SUCCESS!!!');
		},

		onPostFail: function(){
			console.log('POST FAIL!!');
		},

		render: function() {
			this.$el.html(this.template(this.model.attributes));
		}

	});
	return newFormView;
});