
$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendArrows: $('.arrows'),
	});
	$('.slider-active').slick({
		arrows: true,
		dots: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		infinite: true,
		// appendArrows: $('.arrows'),
		// centerMode: true,
		responsive: [
			{
				breakpoint: 1182,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 375,
				settings: {
					slidesToShow: 1,
				}
			},
		],
	});
	$('.slider-partners').slick({
		arrows: true,
		dots: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		infinite: true,
		responsive: [
			{
				breakpoint: 1182,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			},
		],
	});
	$('.slider-reviews').slick({
		arrows: true,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
	});
});



function ibg() {
	document.querySelectorAll(".ibg").forEach(el => {
		if (el.querySelector('img')) {
			el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
		}
	});
}
ibg();

$('.burger').click(function () {
	$('.icon-menu, .nav__header, .header__search_mob').toggleClass('active');
	$('.header__search_mob').prependTo('.menu__top');
	$('body').toggleClass('lock');
});

$('.form').click(function () {
	$('.popup-form').addClass('active');
});
//==========================================================


$(document).ready(function () {
	$('.form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function () {
				if ($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});






