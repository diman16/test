$(document).ready(function(){
		
		// top slider
		$('.top-slider').slick({
			arrows: false,
			dots: true,
			autoplay: true,
	  		autoplaySpeed: 7000,
	  		fade: true,
	    	speed: 1000,
	    	infinite: true,
	    	cssEase: 'linear',
		});

		$('.top-slider').on('setPosition', function(slick){
	  		$('.top-slider .item').removeClass('slide-zoom');
	  		$('.top-slider .item.slick-current').addClass('slide-zoom');
		});
		// 

});