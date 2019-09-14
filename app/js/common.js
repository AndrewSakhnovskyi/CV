'use strict';

// Preloader
$(window).on('load', function() {
	$('.preloader').delay(2000).fadeOut('slow');
});

// Menu mobile
$('.header__nav--open').click(function (e) {
    e.preventDefault();
	$('.header__mobile').toggleClass('header__mobile--visible');
});

$('.header__nav-item').click(function(e){
	e.preventDefault();
	$(this).closest('.header__mobile').removeClass('header__mobile--visible');
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