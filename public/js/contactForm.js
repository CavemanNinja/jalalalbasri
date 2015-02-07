$(function(){

	$("#contact-form").submit(function(e) { // e(vent)
			console.log("ajax function called");
			var postData = $(this).serializeArray();
			var formUrl = $(this).attr("action");

			$.ajax({
				type: 'POST',
				url: formUrl,
				data: postData,
				statusCode: {
					200: function() {
						// alert( "200: success" );
						$(".ja-contact-form").hide({duration: 0});
						$(".ja-contact-success").show({duration: 0});
					},
					500: function() {
						// alert("500: failure");
						$(".ja-contact-form").hide({duration: 0});
						$(".ja-contact-failure").show({duration: 0});
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

})
