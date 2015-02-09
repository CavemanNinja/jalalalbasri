$(function(){
	resizeIntro();

});

$(window).resize(function(){
	resizeIntro();
});

function resizeIntro(){
	console.log($(window).height());
	rowHeight = $('.ja-intro-row').height();
	$('.ja-intro').height(Math.max($(window).height()-50, rowHeight));
}