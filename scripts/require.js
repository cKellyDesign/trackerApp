require([
	'views/rootView', 
	'models/rootModel', 
	'templates/rootTemplate'
	], function(RootView, RootModel, RootTemplate){

	TrApp = window.TrApp || {};
	console.log("ABOUT TO INIT ROOTVIEW");
	TrApp.root = new RootView({
		el: $('.j-main'),
		model: new RootModel({
			"formTitle": "Send Me a Message",
			"formName": "testForm",
			"inputs": [{
				"slug": "firstName",
				"placeholder": "First Name",
				"type": "text"
			}, {
				"slug": "lastName",
				"placeholder": "Last Name",
				"type": "text"
			}, {
				"slug": "email",
				"placeholder": "Email",
				"type": "text"
			},{
				"slug": "message",
				"placeholder": "Message",
				"type": "textarea"
			}, {
				"slug": "submit",
				"placeholder": "Send Message Now",
				"type": "submit"
			}]
		}),
		temp: RootTemplate
	});
});