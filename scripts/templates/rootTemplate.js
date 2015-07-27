define([], function(){
	var model = {
		'formTitle': 'Send Me a Message',
		'formName': 'testForm',
		'inputs': [{
			'slug': 'firstName',
			'placeholder': 'First Name',
			'type': 'text'
		}, {
			'slug': 'lastName',
			'placeholder': 'Last Name',
			'type': 'text'
		}, {
			'slug': 'email',
			'placeholder': 'Email',
			'type': 'text'
		},{
			'slug': 'message',
			'placeholder': 'Message',
			'type': 'textarea'
		}, {
			'slug': 'submit',
			'placeholder': 'Send Message Now',
			'type': 'submit'
		}]
	};

	var stringData = encodeURI(JSON.stringify(model));
	var RootTemplate = '<section class="root_wrap">' +
		'<div class="j_form_wrap">' +
			'<button class="j_initThisForm_btn" data-form-boot="' + stringData + '">Click Here to see the testForm</button>' +
		'</div>' +
	'</section>';
	return RootTemplate;
});