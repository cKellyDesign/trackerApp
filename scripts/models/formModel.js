define([], function(){
	var formModel = Backbone.Model.extend({

		initialize: function() {
      this.fetchFullModel();
    },

    fetchFullModel: function() {
      if (!this.attributes || !this.attributes.formSlug) {
        return;
      }
      $.get('/getFormModel/' + this.attributes.formSlug, _.bind(this.resetModel, this));
    },

    resetModel: function(formDatas) {
      this.set({
        formTitle: formDatas.formTitle,
        formName: formDatas.formName,
        inputs: formDatas.inputs
      });
    }

	});
	return formModel;
});