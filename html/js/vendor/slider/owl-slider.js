// JavaScript Document
$(document).on('ready', function() {
	
	// Header CAROUSEL
	  var team = $("#my-carousel");	 //my carousel is user defind
	  team.owlCarousel({
		items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:false,
        navigationText:["",""],
        autoPlay:true
		  
	  });
	   var team = $("#team-slider");	 //my carousel is user defind
	  team.owlCarousel({
		items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
		itemsMobile:[680,1],
		type: 'opacy',
        pagination:true,
        navigation:false,
        navigationText:["",""],
        autoPlay:true,
		  
	  });
		// HEADER CAROUSEL
	if( $(".header-slider").length ){
    $(".header-slider").find('item').attr('id', 'owl-demo3');
	var owl1 = $("#owl-demo3");	 
		owl1.owlCarousel({
			autoPlay: true,
			navigation: true,
			navigationText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
			pagination: false,
			items : 1, //1 item above 1000px browser width
			itemsDesktop : [1920,1], //1 item between 1920px and 901px
			itemsDesktopSmall : [900,1], // 1 item betweem 900px and 641px
			itemsTablet: [640,1], //1 item between 640 and 0
			itemsMobile : [380,1] ,
			thumbs: false,
			thumbImage: false,
		});
	}
	 
	  // Custom Navigation Events
	  $(".next").click(function(){
		owl.trigger('owl.next');
	  })
	  $(".prev").click(function(){
		owl.trigger('owl.prev');
	  })
	  $(".play").click(function(){
		owl.trigger('owl.play',500); //owl.play event accept autoPlay speed as second parameter
	  })
	  $(".stop").click(function(){
		owl.trigger('owl.stop');
	  })
	  
});