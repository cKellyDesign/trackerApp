require([
  'views/rootView',
  'models/rootModel',
  'templates/rootTemplate'
], function(RootView, RootModel, RootTemplate) {
  var arr = ['testForm', 'myForm', 'longForm'];
  TrApp = window.TrApp || {};
  TrApp.root = new RootView({
    el: $('.j-main'),
    model: new RootModel({
      'forms': arr
    })
  });

});
