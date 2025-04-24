$(function(){
//sliders	
	$('.slider-news_main').each(function(){
		$(this).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			infinite: true,
			fade: false,
			autoplay: true,
			autoplaySpeed: 5000,
			cssEase: 'linear',
			speed: 500,
			prevArrow: $(this).parent().parent().find('.prev-news'),
			nextArrow: $(this).parent().parent().find('.next-news'),
			responsive: [
				{
					breakpoint: 999,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: false
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	});
	
	$('.slider-other-blog').each(function(){
		$(this).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			infinite: true,
			fade: false,
			autoplay: false,
			autoplaySpeed: 2000,
			cssEase: 'linear',
			speed: 500,
			prevArrow: $(this).parent().parent().find('.prev-blog'),
			nextArrow: $(this).parent().parent().find('.next-blog'),
			responsive: [
				{
					breakpoint: 999,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: false
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	});
	
	$('.slider-other-blog, .slider-blog-state, .slider-part-about').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
	  $(this).addClass('active');
	});
	
	$('.slider-blog-state').each(function(){
		$(this).slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			infinite: true,
			fade: false,
			prevArrow: $(this).parent().parent().find('.prev-other-blog'),
			nextArrow: $(this).parent().parent().find('.next-other-blog'),
			responsive: [
				{
					breakpoint: 999,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
						dots: false
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	});
	
	$('.slider-siblings-proj').each(function(){
		$(this).slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			infinite: true,
			fade: false,
			prevArrow: $(this).parent().parent().find('.prev-other-proj'),
			nextArrow: $(this).parent().parent().find('.next-other-proj'),
			responsive: [
				{
					breakpoint: 999,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
						dots: false
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	});
	
	$('.slider-part-about').each(function(){
		$(this).slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			infinite: true,
			fade: false,
			prevArrow: $(this).parent().parent().find('.prev-part-about'),
			nextArrow: $(this).parent().parent().find('.next-part-about'),
			responsive: [
				{
					breakpoint: 999,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
						infinite: true,
						dots: false
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				}
			]
		});
	});
	
	$('.slider-ab-about').each(function(){
		$(this).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			infinite: true,
			fade: true,
			prevArrow: $(this).parent().parent().find('.prev-ad-about'),
			nextArrow: $(this).parent().parent().find('.next-ad-about')
		});
	});
	
	$('.slider-history-about').each(function(){
		$(this).slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			infinite: false,
			fade: false,
			prevArrow: $(this).parent().parent().find('.prev-hist-ab'),
			nextArrow: $(this).parent().parent().find('.next-hist-ab'),
			responsive: [
				{
					breakpoint: 999,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
						dots: false
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	});
	
	$('.slider-serv_ab').each(function(){
		$(this).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			infinite: true,
			fade: false,
			prevArrow: $(this).parent().parent().find('.prev-proj-serv-ab'),
			nextArrow: $(this).parent().parent().find('.next-proj-serv-ab')
		});
	});
		
	$('.slider-services_m').each(function(){
		$(this).on('init', function(event, slick){
			$(this).parent().find('.count-serv').text((slick.currentSlide + 1) + '/' + slick.slideCount);
		});
		
		$(this).on('beforeChange', function(){
			$(this).addClass('active');
		});
		
		$(this).on('afterChange', function(event, slick){
			$(this).parent().find('.count-serv').text((slick.currentSlide + 1) + '/' + slick.slideCount);
		});
		
		$(this).slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			infinite: true,
			fade: false,
			prevArrow: $(this).parent().find('.prev-serv'),
			nextArrow: $(this).parent().find('.next-serv'),
			responsive: [
				{
					breakpoint: 999,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
						dots: false
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	});

//tabs
	$('.nav-tab-news_main li:eq(0)').addClass('active');
	$('.tab-news_main:eq(0)').addClass('active');
	$('.nav-tab-news_main li').click(function () {
		var ind12 = $(this).index();
		$('.cont-news_main').find('.tab-news_main:eq(' + ind12 + ')').addClass('active').siblings('.tab-news_main').removeClass('active');
		$(this).addClass('active');
		$(this).siblings('li').removeClass('active')
		return false;
	});	

//select
	$('.sel-filter select').selectbox();

//tabs
	$('.tabs-tb').each(function(){
		$(this).find('.nav-tb div:eq(0), .nav-tb li:eq(0)').addClass('active');
		$(this).find('.nav-tb div, .nav-tb li').click(function () {
			var ind = $(this).index();
			$(this).parents('.tabs-tb').find('.cont-tb').find('.tab-tb:eq(' + ind + ')').show().addClass('active').siblings('.tab-tb:visible').hide().removeClass('active');
			$(this).addClass('active');
			$(this).siblings('.nav-tb div, .nav-tb li').removeClass('active')
			return false;
		});
	});	
	
//all
	$('.list-history .link-all a').click(function(){
		$(this).toggleClass('active').parent().parent().toggleClass('active')
		return false
	});
	
//panel search
	$('.but-search').click(function(){
		$('.wr-search-page').toggleClass('active')
	});
	$('.close-panel-search').click(function(){
		$(this).parent().removeClass('active')
	});
	
//header
	function header_promo(){
		var top = $(document).scrollTop();
		if (top > 5) $('.wr-header').addClass('fixed');
		else $('.wr-header').removeClass('fixed');	
	}
	
	$(window).scroll(function() {
		header_promo();
	});	
	
	header_promo();
	
//menu mobile
	$('.menu-tt a').click(function(){
		$(this).parent().toggleClass('active');
		$('.wr-panel-menu, .wr-header').toggleClass('active')
		$('body').toggleClass('active')
		return false;
	});
	
	$(document).click(function(event) {
	    if ($(event.target).closest('.wr-panel-menu').length) return;
		$('.menu-tt, .wr-panel-menu').removeClass('active');
	    event.stopPropagation();
	});
	
	$('.arrow-more-menu').click(function(){
		$(this).toggleClass('active').prev().toggle()
	});
	
//maps
	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
				center: [55.7211829,37.6497726],
				zoom: 16,
				controls: []
			}, {
				suppressMapOpenBlock: true // отключаем "Открыть в Яндекс.Картах"
			}),
			
			myPlacemark = new ymaps.Placemark([55.7211829,37.6497726], {
				balloonContent: '<div class="baloon-map">АО «РАМАКС Интернейшнл», м. Павелецкая</div>'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'images/ico-map.svg',
				iconImageSize: [92, 112],
				iconImageOffset: [-0, -72]
			});
			
		myMap.behaviors.disable('scrollZoom');
		myMap.geoObjects.add(myPlacemark);
	});
});

//field
document.addEventListener('DOMContentLoaded', function () {
    const fields = document.querySelectorAll('.field input, .textarea textarea');

    fields.forEach(element => {
        setActiveClass(element);

        element.addEventListener('focus', () => {
            element.classList.add('active');
        });

        element.addEventListener('blur', () => {
            setActiveClass(element);
        });
    });

    function setActiveClass(el) {
        if (el.value.trim() !== '') {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    }
});