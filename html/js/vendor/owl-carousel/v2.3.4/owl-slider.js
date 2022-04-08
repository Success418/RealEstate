// JavaScript Document
$(document).on('ready', function() {
	
	// Header CAROUSEL
	  
	  
		   
	  
	  
		var owl1 = $("#my_carousel_1");	 //my carousel is user defind
		  owl1.owlCarousel({
				nav: false,
				loop: true,
				autoplay: true,
				autoplayTimeout: 4000,
				dots:true,
				margin:80,
				responsive: {
				  0: {
					items: 1
				  },
				  600: {
					items: 1
				  },

				  992:{
					  items: 1
				   },
				  1000: {
					items: 1
				  }
				}
		  });
		 
	 
	  // Custom Navigation Events
	  $(".next").click(function(){
		owl.trigger('owl.next');
	  })
	  $(".prev").click(function(){
		owl.trigger('owl.prev');
	  })
	  $(".play").click(function(){
		owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
	  })
	  $(".stop").click(function(){
		owl.trigger('owl.stop');
	  })
	  
});