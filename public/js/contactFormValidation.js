$(function(){
	$('#contact-form').bootstrapValidator({
		message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                message: 'The name is not valid',
                validators: {
                    notEmpty: {
                        message: 'Please tell me your name!'
                    }
                }
            },
            email: {
                validators: {
                    message: 'The email is not valid',
                    notEmpty: {
                        message: 'Please tell us your email address.'
                    },
                    emailAddress: {
                        message: 'Oops! Your email address doesn\'t look right, give it another go!'
                    }
                }
            }
        }
	});
});