
$(document).ready(function() {

			// инициализация плагина Masonry
var $grid = $('.grid').imagesLoaded( function() {
    $grid.masonry({
       itemSelector: '.grid__item',
       columnWidth: '.grid__item',
       percentPosition: true
       
    });
});

			// открытие поля поиска
$('.search__btn').click(function () {

	$('.search__input').toggleClass('search__input_open');
	dropdown2.removeClass('dropdown2_open');
	dropdown.removeClass('dropdown_open');
	if ($(window).outerWidth() > 770 && $(window).outerWidth() < 1000) {
		if ($('.search__input').hasClass('search__input_open')) {
			$('.menu-open').css('display', 'block');
			$('.menu_navigation').addClass('menu_navigation_js');
		} else {
			$('.menu-open').css('display', 'none');
			$('.menu_navigation').removeClass('menu_navigation_js');
		}
	}
	if ($(window).outerWidth() < 480) {
		if ($('.search__input').hasClass('search__input_open')) {
			$('.logo').css('display', 'none');
		} else {
			$('.logo').css('display', 'block');
		}
	}
	
});


			// выпадающее меню
var dropdown = $('.dropdown');
var dropdown2 = $('.dropdown2');

var dropdownOpen = function dropdownOpen(link, down, classToggle) {
	link.parent().siblings().find(down).removeClass(classToggle);
	if (link.siblings(down).hasClass(classToggle)) {
		link.siblings(down).removeClass(classToggle);
	} else {
		link.siblings(down).addClass(classToggle);
	}
};


var documentWidth = $(document).width();



$('.menu__link_navigation').click(function (e) {

	dropdownOpen($(this), dropdown, 'dropdown_open');
	dropdown2.removeClass('dropdown2_open');
	e.preventDefault();
	var left = $(this).siblings().offset().left;
	var width = $(this).siblings().width();
	var downPosition = left + width;
	var leftPosition = documentWidth - width - 10 - left;
	if (documentWidth < downPosition) {
		$(this).siblings().css('left', leftPosition + 'px');
	}
	
});

$('.dropdown__link').click(function (e) {

	dropdownOpen($(this), dropdown2, 'dropdown2_open');
	e.preventDefault();
	var left = $(this).siblings().offset().left;
	var width = $(this).siblings().width();
	var downPosition = left + width;
	
	if (documentWidth < downPosition) {
		$(this).siblings().css('left', '-99%');
	}
});



			// открытие навигационного меню на маленьких экранах
$('.menu-open').click(function(){

	$('.menu-open__global_top').toggleClass('menu-open__global_top_open');
	$('.menu-open__global_middle').toggleClass('menu-open__global_middle_open');
	$('.menu-open__global_bottom').toggleClass('menu-open__global_bottom_open');
	$('.menu_navigation').toggleClass('menu_navigation_open');
	dropdown.removeClass('dropdown_open');
	dropdown2.removeClass('dropdown2_open');
});

			// открытие Google карты
$('#openInGoogleMaps').click(function openGoogleMaps(e) {
	$('.map').addClass('map_open');
	e.preventDefault();
});
			// закратие карты
$('.map__clouse').click(function () {
	$('.map').removeClass('map_open');
});

			// кнопка скрола вверх
var windowHeight = $(window).height();

$(window).scroll(function () {
	if ($(this).scrollTop() > windowHeight) {
		$('.up').css('display', 'block');
	} else {$('.up').css('display', 'none');
		}
});


$('.up').click(function() {
    $('html, body').scrollTop(0);
});

$(window).scroll(function () {
	var scroll = $(this).scrollTop();
	var top = $('.top').position().top;
	if ($(window).outerWidth() > 770 && $(window).height() > 414) {

	if (top <= scroll) {
		$('.top').css('position', 'fixed').css('top', '0')
	}} 
})







});
