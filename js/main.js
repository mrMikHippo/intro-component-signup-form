var validate = new Bouncer('form', {
  // Disable form submission
  disableSubmit: true,

  messages: {
    missingValue: {
      default: function(field) {
        var human_readable_name = field.placeholder;
        if (!human_readable_name) return field.validationMessage;
        return human_readable_name + " cannot be empty";
      }
    }
  }
});
