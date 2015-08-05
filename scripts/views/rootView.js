define([
  'templates/rootTemplate',
  'views/loginView',
  'models/loginModel',
  'views/userOptionsView',
  'models/userOptionsModel',
  'views/formView',
  'models/formModel'
], function(rootTemplate, LoginView, LoginModel, UserOptionsView, UserOptionsModel, formView, formModel) {
  var RootView = Backbone.View.extend({

    template: _.template(rootTemplate),

    initialize: function() {
      this.render();
      // this.initForms();
      this.subscribeEvents();
      this.initLogin();
    },

    subscribeEvents: function() {
      TrApp.EventHub.on('login:success', this.setUser, this);
    },

    initLogin: function() {
      var loginView = new LoginView({ 
        el:$('#loginViewEl'),
        model: new LoginModel()
      });
    },

    setUser: function(data) {
      this.model.set('currentUser', data.username);
      this.initUserOptions(data);
    },

    initUserOptions: function(data) {
      data.forms = ["myForm", "conorsForm"];
      var userForms = _.map(data.forms, function(formSlug){
        return { 
          'slug': formSlug, 
          'placeholder': 'New ' + formSlug + ' Form', 
          'type': 'submit',
          'classes': 'col-xs-12'
        };
      });
      var userOptions = new UserOptionsView({
        el: $('#userOptionsEl'),
        model: new UserOptionsModel({
          username: data.username,
          inputs: userForms
        })
      })
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
