define([
  'templates/formTemplate'
], function(formTemplate) {
  var FormView = Backbone.View.extend({

    charMax: 140,

    template: _.template(formTemplate),

    events: {
      'keydown #message': 'checkMessageLength',
      'click #submit': 'sendMessage',
      'click .j_initThisForm_btn': 'render'
    },

    initialize: function() {
      this.model.on('change', this.isReady, this);
    },

    isReady: function() {
      $('.j_initThisForm_btn').removeClass('disabled');
    },

    setElements: function() {
      this.inputs = $('.j-input', this.$el);
      this.textareas = $('.j-textarea');
      this.messageBox = $('#message');
      this.charLeft = $('#characterLeft');
      $(this.charLeft).text('140 characters left');
    },

    checkMessageLength: function() {
      var currValLength = $(this.messageBox).val().length;

      if (currValLength >= this.charMax) {
        $(this.charLeft).text('You have reached the limit.');
        $(this.messageBox).addClass('red').addClass('disabled');
      } else {
        var remainingLength = this.charMax - currValLength;
        $(this.charLeft).text(remainingLength + ' characters left.');
        $(this.messageBox).removeClass('disabled').removeClass('red');
      }
    },

    sendMessage: function(e) {
      e.preventDefault();
      var messageData = {};
      _.each($('.form-control', this.$el), function(ele){
        messageData[$(ele).attr('name')] = $(ele).val();
      });

      messageData.name = messageData.name || messageData.firstName + (messageData.lastName ? ' ' + messageData.lastName : '');
      console.log(messageData.name);

      $.ajax({
        type: "POST",
        url: "/newUser",
        data: JSON.stringify(messageData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) { console.log("SUCCESS!! DATA SENT - ", data); },
        failure: function(err) { console.log("FAIL!! Err - ", err); }
      });
    },

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      this.setElements();
      return this;
    }

  });
  return FormView;
});
