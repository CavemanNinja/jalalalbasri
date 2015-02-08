$(function(){
	$("#contact-form").submit(function(e) { // e(vent)

		

		console.log("ajax function called");
		
		var postData = $(this).serializeArray();
		var formUrl = $(this).attr("action");

		$.ajax({
			type: 'POST',
			url: formUrl,
			data: postData,
			beforeSend: function() {
				console.log($('#name').val() + ", " + $('#email').val() + ", " + $('#about').val() );
				if ($('#name').val() == "" || $('#email').val() == "" || $('#about').val() == "") {
					return false;
					console.log('empty form');
				} else {
					$(".ja-contact-form").hide();
					$(".ja-spinner").show();
				}
			},
			statusCode: {
				200: function() {
					// alert( "200: success" );
					$(".ja-spinner").hide();
					
					$(".ja-contact-success").show();
				},
				500: function() {
					// alert("500: failure");
					$(".ja-spinner").hide();
					$(".ja-contact-failure").show();
				}
			}
		});

		
		e.preventDefault();
		// e.unbind(); //Error thrown
	});

	$("#ja-contact-tryagain").click(function() {
		$(".ja-contact-failure").hide({duration: 0});
		$(".ja-contact-form").show({duration: 0});
	});

	$("#ja-contact-again").click(function() {
		$("#name").val("");
		$("#email").val("");
		$("#about").val("");

		$(".ja-contact-success").hide({duration: 0});
		$(".ja-contact-form").show({duration: 0});

		// $('.contactform-form').bootstrapValidator({
		// 	resetForm: true;
		// });
	});	

});