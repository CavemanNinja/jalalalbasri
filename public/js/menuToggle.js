$(function(){
	$('#menu-toggle').click(function(e){
		e.preventDefault();
		if($('#ja-page').hasClass('lg')) {
			if ($('#ja-page').hasClass('lg-on')) {
				$('#ja-page').removeClass('lg-on').addClass('lg-off');
				$('#ja-sidebar').removeClass('lg-on').addClass('lg-off');
			} else {
				$('#ja-page').removeClass('lg-off').addClass('lg-on');
				$('#ja-sidebar').removeClass('lg-off').addClass('lg-on');
			}
		} else {
			if ($('#ja-sidebar').hasClass('sm-off')) {
				$('#ja-sidebar').removeClass('sm-off').addClass('sm-on');
				$('#ja-content').removeClass('sm-off').addClass('sm-on');
				$('.html-root').addClass('no-scroll');
				// $('.blackout').fadeIn();
				$('.blackout').show();
			} else {
				$('#ja-sidebar').removeClass('sm-on').addClass('sm-off');
				$('#ja-content').removeClass('sm-on').addClass('sm-off');
				$('.html-root').removeClass('no-scroll');
				// $('.blackout').fadeOut();
				$('.blackout').hide();

			}
		}


	});


	mediaCheck({
		media: '(max-width: 768px)',
		entry: function() {
			$('#ja-page').removeClass('lg');
			$('#ja-page').removeClass('lg-on').removeClass('lg-off');
			$('#ja-sidebar').removeClass('lg-on').removeClass('lg-off');
			$('#ja-sidebar').addClass('sm-off');
			$('#ja-content').addClass('sm-off');
		},
		exit: function() {
			$('#ja-page').addClass('lg');
			
			if ($('#ja-sidebar').hasClass('sm-on')) {
				$('#ja-sidebar').removeClass('sm-on').removeClass('sm-off');
				$('#ja-content').removeClass('sm-on').removeClass('sm-off');
				$('#ja-page').addClass('lg-on');
				$('#ja-sidebar').addClass('lg-on');
			} else {
				$('#ja-sidebar').removeClass('sm-on').removeClass('sm-off');
				$('#ja-content').removeClass('sm-on').removeClass('sm-off');
				$('#ja-page').addClass('lg-on');
				$('#ja-sidebar').addClass('lg-on');
			}
			

			
			$('.html-root').removeClass('no-scroll');
			$('.blackout').fadeOut();
		}
	});

	$(".blackout").click(function(e){
		if($('#ja-sidebar').hasClass('sm-on')){
			smallSidebarOff();	
		}
	});

	$('#ja-sidebar > ul > li > a').click(function(){
		if($('#ja-sidebar').hasClass('sm-on')){
			smallSidebarOff();
		}
	});

	function smallSidebarOff() {
		$('#ja-sidebar').removeClass('sm-on').addClass('sm-off');
		$('#ja-content').removeClass('sm-on').addClass('sm-off');
		$('.html-root').removeClass('no-scroll');
		// $('.blackout').fadeOut();
		$('.blackout').hide();
	}

	// $('.ja-sidebar-nav > li > a').click(function(){
	// 	$('#ja-sidebar').toggleClass('toggled');
	// });
});