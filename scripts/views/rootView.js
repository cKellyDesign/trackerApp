define([
  'templates/rootTemplate',
  'views/loginView',
  'views/formView',
  'models/formModel'
], function(rootTemplate, LoginView, formView, formModel) {
  var RootView = Backbone.View.extend({

    template: _.template(rootTemplate),

    initialize: function() {
      this.render();
      // this.initForms();
      this.initLogin();
    },

    initLogin: function() {
      var loginView = new LoginView({ el:$('#loginViewEl') });
    },

    initForms: function() {
      _.each($('.j_form_wrap', this.$el), function(formEle) {
        var formSlug = $('.j_initThisForm_btn', formEle).data('form-slug');
        var newForm = new formView({
          el: $(formEle),
          model: new formModel({
            'formSlug': formSlug
          })
        });
      });
    },

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }

  });
  return RootView;
});
