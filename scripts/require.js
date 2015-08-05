require([
  'views/rootView',
  'models/rootModel',
  'templates/rootTemplate'
], function(RootView, RootModel, RootTemplate) {
  var arr = ['usernameForm', 'myForm', 'longForm'];
  TrApp = window.TrApp || {};
  TrApp.EventHub = {};
  _.extend(TrApp.EventHub, Backbone.Events);
  TrApp.root = new RootView({
    el: $('.j-main'),
    model: new RootModel({
      'forms': arr,
      'currentUser': null
    })
  });

});
