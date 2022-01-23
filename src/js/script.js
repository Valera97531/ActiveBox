window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuClose = document.querySelector('.menu_close'),
	 burger = document.querySelector('.burger');
	 overlay = document.querySelector('.overlay');

    burger.addEventListener('click', () => {
		  menu.classList.toggle('active');
		  overlay.classList.add('overlay_active');
	 });
	 
	 menuClose.addEventListener('click', () => {
		  menu.classList.remove('active');
		  overlay.classList.remove('overlay_active');
	 });
});

@@include('jquery-3.5.1.js')
@@include('slick.js')
@@include('jquery.fancybox.js')
@@include('jquery.maskedinput.js')
	
$(document).ready(function(){
	$('.reviews_content').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true
	 });

	 $('input[name=phone]').mask('+38 (999) 999-99-99');

	 $(window).scroll(function() {
		if ($(this).scrollTop() > 500) {
			$('.page-up').fadeIn();
		} else {
			$('.page-up').fadeOut();
		}
	});

	$("a[href='#page-up']").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});
});