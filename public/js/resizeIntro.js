$(function(){
	resizeIntro();

});

$(window).resize(function(){
	resizeIntro();
});

function resizeIntro(){
	bodyHeight = $('.ja-intro-body').height();
	$('.ja-intro').height(Math.max($(window).height()-50, bodyHeight));
}