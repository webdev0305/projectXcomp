(function($){
  "use strict";

  $(window).on('load', function(){

	    //preloader
	    $(".preloader").delay(300).animate({
	        "opacity" : "0"
	        }, 500, function() {
	        $(".preloader").css("display","none");
	    });
	
	    // menu options custom affix
	    var fixed_top = $(".header");
	    $(window).on("scroll", function(){
	        if( $(window).scrollTop() > 50){  
	            fixed_top.addClass("animated fadeInDown menu-fixed");
	        }
	        else{
	            fixed_top.removeClass("animated fadeInDown menu-fixed");
	        }
	    });
	
	    // mobile menu js
	    $(".navbar-collapse>ul>li>a, .navbar-collapse ul.sub-menu>li>a").on("click", function() {
	      let element = $(this).parent("li");
	      if (element.hasClass("open")) {
	        element.removeClass("open");
	        element.find("li").removeClass("open");
	      }
	      else {
	        element.addClass("open");
	        element.siblings("li").removeClass("open");
	        element.siblings("li").find("li").removeClass("open");
	      }
	    });
	     
	
	    let img=$('.bg_img');
	    img.css('background-image', function () {
	      let bg = ('url(' + $(this).data('background') + ')');
	      return bg;
	    });
	
	 
	    $('.testimonial-slider').slick({
	      autoplay: true,
	      speed: 700,
	      arrows: true,
	      dots: false,
	      arrows: false,
	      vertical: true,
	      verticalSwiping: true,
	    });
  });

  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 200) {
        $(".scroll-to-top").fadeIn(200);
    } else {
        $(".scroll-to-top").fadeOut(200);
    }
  });
  
})(jQuery);