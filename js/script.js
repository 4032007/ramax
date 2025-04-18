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
		autoplay: true,
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


$('.slider-blog-state').each(function(){
    $(this).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        fade: false,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: 'linear',
		speed: 500,
        prevArrow: $(this).parent().parent().find('.prev-other-blog'),
        nextArrow: $(this).parent().parent().find('.next-other-blog'),
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

$('.slider-siblings-proj').each(function(){
    $(this).slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        fade: false,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: 'linear',
		speed: 500,
        prevArrow: $(this).parent().parent().find('.prev-other-proj'),
        nextArrow: $(this).parent().parent().find('.next-other-proj'),
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



//tabs interier
	$('.nav-news_main li:eq(0)').addClass('active');
	$('.tab-news_main:eq(0)').addClass('active');
	$('.nav-news_main li').click(function () {
		var ind12 = $(this).index();
		$('.cont-news_main').find('.tab-news_main:eq(' + ind12 + ')').addClass('active').siblings('.tab-news_main').removeClass('active');
		$(this).addClass('active');
		$(this).siblings('li').removeClass('active')
		return false;
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



//select
	$('.sel-filter select').selectbox();


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
	})

	
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
		$('.menu-top, .wr-header').toggleClass('active')
		$('body').toggleClass('active')
		return false;
	});
});