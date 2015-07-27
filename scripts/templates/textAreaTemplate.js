define([], function(){
	var textareaTemplate = '<div class="form-group">' +
        '<textarea class="form-control j-textarea" type="<%= field.slug %>" id="message" placeholder="<%= field.placeholder %>" maxlength="140" rows="7"></textarea>' + 
          '<span class="help-block"><p id="characterLeft" class="help-block ">You have reached the limit</p></span>' +
        '</div>';
	return textareaTemplate;
});