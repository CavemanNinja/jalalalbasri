$(function(){
	$('.nav-pills > li').click(function(){
		$('.nav-pills > li').removeClass('active');
		$(this).addClass('active');
	})
})