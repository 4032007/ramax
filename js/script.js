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
		autoplaySpeed: 2000,
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