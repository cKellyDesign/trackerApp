define([
  'templates/rootTemplate',
  'views/loginView',
  'models/loginModel',
  'views/userOptionsView',
  'models/userOptionsModel',
  'views/newFormView',
  'models/newFormModel',
  'views/formView',
  'models/formModel'
], function(rootTemplate, LoginView, LoginModel, UserOptionsView, UserOptionsModel, newFormView, newFormModel, formView, formModel) {
  var RootView = Backbone.View.extend({

    user: null,
    template: _.template(rootTemplate),

    initialize: function() {
      this.subscribeEvents();
      this.render();
      this.user = TrApp.getCookie("username");

      if ( this.user ) {
        this.setUser({ username: this.user });
      } else {
        this.initLogin();
      }
    },

    subscribeEvents: function() {
      TrApp.EventHub.on('login:success', this.setUser, this);
      TrApp.EventHub.on('userOpt:newForm', this.initNewForm, this);
      this.model.on('change:currentUser', this.initUserOptions, this);
    },

    initLogin: function() {
      var loginView = new LoginView({ 
        el:$('#loginViewEl'),
        model: new LoginModel()
      });
    },

    setUser: function(user) {
      this.model.set('currentUser', user);
    },

    initUserOptions: function() {
      var data = this.model.get('currentUser');
      if ( !data.forms || data.forms.length < 1) {
        // data.forms = ["myForm", "conorsForm"];
      }
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

    initNewForm: function() {
      var newForm = new newFormView({
        el: $('#newFormEl'),
        model: new newFormModel()
      });
    },

    // initForms: function() {
    //   _.each($('.j_form_wrap', this.$el), function(formEle) {
    //     var formSlug = $('.j_initThisForm_btn', formEle).data('form-slug');
    //     var newForm = new formView({
    //       el: $(formEle),
    //       model: new formModel({
    //         'formSlug': formSlug
    //       })
    //     });
    //   });
    // },

    render: function() {
      this.$el.html(this.template(this.model.attributes));
    }

  });
  return RootView;
});
