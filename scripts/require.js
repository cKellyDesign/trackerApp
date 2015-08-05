require([
  'views/rootView',
  'models/rootModel',
  'templates/rootTemplate',
  './TrAppUtils'
], function(RootView, RootModel, RootTemplate, TrAppUtils) {

  TrApp = window.TrApp || {
    'getCookie': TrAppUtils.getCookie,
    'setCookie': TrAppUtils.setCookie
  };

  TrApp.EventHub = {};
  _.extend(TrApp.EventHub, Backbone.Events);

  TrApp.root = new RootView({
    el: $('.j-main'),
    model: new RootModel({
      'currentUser': null
    })
  });

});
