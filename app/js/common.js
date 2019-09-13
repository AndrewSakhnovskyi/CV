'use strict';

// Preloader
$(window).on('load', function() {
	$('.preloader').delay(2000).fadeOut('slow');
});

// Header scroll
$(window).on('scroll', function(){
	if ($(window).scrollTop()){
		$('header').addClass('black');
	} else {
		$('header').removeClass('black');
	}
});

// Smooth scroll
$('a[href^="#"]').click(function () {
	var target = $(this).attr('href');
	$('html, body').animate({scrollTop: $(target).offset().top}, 1000);
	return false;
  });