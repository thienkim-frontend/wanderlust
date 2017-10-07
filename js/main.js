jQuery(document).ready(function ($) {
	var widthWin = $(window).width();
	new WOW().init();
	$('[data-toggle="tooltip"]').tooltip(); 
	$("[data-fancybox]").fancybox({
		// Options will go here
	});
	

	$(".navbar-nav > li > a").each(function( index ) {
  	$( this ).css({'animation-delay': (index/10)+'s'});
  });

	function doAnimations(){
	    var elems= $(".caption-wrapper.active-slide").find('.animation');
	    elems.each(function () {
	        var $this = $(this),
	            $animationType = $this.data('animation'),
	            $animationDelay= $this.data('delay');
	        $this.addClass(" animated "+ $animationType).css({"animation-delay":$animationDelay}) ;   
	    });
	}

	function animateCaption(el){
		if($(el).length){
		    $(el).bxSlider({
						// speed: 5000,
			    	pager   : false,
						controls: true,
						nextText: '<i class="fa fa-angle-right"></i>',
						prevText: '<i class="fa fa-angle-left"></i>',
		        onSliderLoad: function () {
		            $(".slider-progress-bar").css("width", "100%");
		            $(el + '>li .caption-wrapper').eq(1).addClass('active-slide');
		            doAnimations();
		        },
		        onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
		            $(".slider-progress-bar").addClass("animated").css("width", "100%");
		            $('.active-slide').removeClass('active-slide');
		            $(el + '>li .caption-wrapper').eq(currentSlideHtmlObject + 1).addClass('active-slide');
		            doAnimations();
		        },

		        onSlideBefore: function () {
		            $(".slider-progress-bar").removeClass("animated").css("width", "0%");
		            var elems= $(".caption-wrapper.active-slide").find('.animation');
		            elems.each(function () {
		                var $this = $(this),
		                    $animationType = $this.data('animation');
		                $this.removeClass(" animated "+ $animationType) ;   
		            });
		            elems.removeAttr('style');
		        }
		    });
		}
	}
	animateCaption(".hero-wrapper");


	if($('.feature-slider').length){
		var $slideWidth = $('.feature-section').width();
		if(widthWin > 991){
			$slideWidth = ($slideWidth- (25 * 3))/4;
		}
		if(widthWin < 992 && widthWin >= 768){
			$slideWidth = ($slideWidth- (25 * 2))/3;
		}
	    $('.feature-slider').bxSlider({
		    	pager   : false,
					controls: true,
					slideMargin: 25,
					minSlides: 2,
					maxSlides: 4,
					slideWidth: $slideWidth,
					nextText: '<i class="fa fa-angle-right"></i>',
					prevText: '<i class="fa fa-angle-left"></i>'
			});
	}
	if($('.instagram-pics li').length > 6){
		var sliderWidth = $('.instagram-wrapper').width();
	    $('.instagram-pics').bxSlider({
		    	pager   : false,
					controls: false,
					slideMargin: 0,
					minSlides: 4,
					maxSlides: 6,
					slideWidth: sliderWidth/6
			});
	}
	if($('.main-post .thumbnail-slider li').length > 2){
    $('.main-post .thumbnail-slider').bxSlider({
  		mode: 'fade',
  		auto: true,
    	pager   : false,
			controls: true,
			nextText: '<i class="fa fa-angle-right"></i>',
			prevText: '<i class="fa fa-angle-left"></i>'
		});
	}

	
	/*-----------------------------------------
    SMOOTH SCROLL - https://github.com/kswedberg/jquery-smooth-scroll
    ------------------------------------------*/
	init_navigation_scroll = function() {
    $('a.smooth-scroll').smoothScroll({
      speed: 600,
      offset:-60
    });
  };
	init_navigation_scroll();

	$("#crollToTop").click(function(event) {
		$('html,body').animate({scrollTop:0},'slow');return false;
	});
	
	if ( ($(window).height() + 100) < $(document).height() ) {
	    $('#crollToTop').removeClass('hidden').affix({
	        offset: {top:100}
	    });
	}
	
});

$(window)
  .on( 'load', function() {
  	$("#loading").fadeOut();
  })
  .on( 'resize', function() {
  })
  .on( 'scroll', function() {
  	var widthWin = $(window).width();
  	if(widthWin >= 1024){
  		var t = window.pageYOffset;
  		$(".caption-wrapper").css("margin-top", t / 2).css("opacity", 100 / t < 1 ? 100 / t : 1);
  	}
    

  }); 

