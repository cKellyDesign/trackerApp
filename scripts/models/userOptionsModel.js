define([], function(){
	var userOptionsModel = Backbone.Model.extend({
		defaults: {
			inputs: [{ 
        'slug': 'createForm', 
        'placeholder': 'Create a New Form', 
        'type': 'submit',
        'classes': 'col-xs-12'
      }, {
				'slug' : 'viewPosts',
				'placeholder' : 'View My Posts',
				'type' : 'submit',
				'classes' : 'pull-left'
			}, {
				'slug' : 'editUser',
				'placeholder' : 'Edit User Info',
				'type' : 'submit',
				'classes' : 'pull-right'
			}]
		},
		initialize: function(){
			var initedInputs = this.get('inputs');
			if (initedInputs !== this.defaults.inputs) {
				var theseInputs = initedInputs.concat(this.defaults.inputs);
				this.set('inputs', theseInputs);
			}
		}
	});
	return userOptionsModel;
});