/*========================================== MASTER JAVASCRIPT ===================================================================

	Project     :	RESUME TEMPLATE
	Version     :	1.0
	Last Change : 	01/09/2020
	Primary Use :  RESUME CENTER TEMPLATE

=================================================================================================================================*/

$(document).ready(function () {
	"use strict"; //Start of Use Strict
	var menu_li = $('.navbar-nav li a');
	var collapse = $('.navbar-collapse');
	var top_nav = $('.navbar-menu');
	
	/* Add & Remove active class in Menu and Submenu based on url(location) Start*/
        var url = window.location;
    // Will only work if string in href matches with location
        $('ul.navbar-nav a[href="' + url + '"]').parent().addClass('active');

    // Will also work for relative and absolute hrefs
        $('ul.navbar-nav a').filter(function () {
            return this.href == url;
		}).parent().addClass('active').parent().parent().addClass('active');

    /* Add & Remove active class in Menu and Submenu based on url(location) End*/
	
	$(window).scroll(function() {
	  var $header = $('.navbar-menu');
	  if ($(this).scrollTop() > 120) {
		if (!$header.hasClass('fixed-top')) $header.addClass("fixed-top");
	  } else {
		if ($header.hasClass('fixed-top')) $header.removeClass("fixed-top");
	  }
	}); 
	
	//MENU-1 SCROLL
    $('.pagescroll').on('click', function(e) {
        var y = $(window).scrollTop();
        var t = "";
        if (y <= 230) {
            t = 200;
        } else {
            t = 50;
        }
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - t
        }, 2000);
        return false;
    });
	
    //RESPONSIVE MENU SHOW AND HIDE FUNCTION
    if (menu_li.length) {
        menu_li.on("click", function(event) {
			var disp = $(".navbar-toggler").css('display'); 
			if( !$(".navbar-toggler").hasClass('collapsed') ){			
				if(collapse.hasClass('show')){
					collapse.removeClass('show').slideUp( "slow");
				}
			}            
        });    
    }	
	
	
	$('#searchform').on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $('#s').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
	});
	
	 //NUMBER COUNTING
	var counter = $('.count-num');
	if (counter.length) { 
		counter.counterUp({
			delay: 10,
			time: 1000
		});
	}
	
	$('.carousel').carousel({
	  interval: false
	})
	
	//video
	var player = $('.player');
    if (player.length) {
        player.mb_YTPlayer();
    }
	
	//FAQ ACCORDION
	var accordion = $(".faq-accord");
    if (accordion.length) {
        accordion.each(function() {
            var all_panels = $(this).find('.faq-ans').hide();
            var all_titles = $(this).find('.faq-ques');
            $(this).find('.faq-ans.active').slideDown();

            all_titles.on("click", function() {
                var acc_title = $(this);
                var acc_inner = acc_title.next();

                if (!acc_inner.hasClass('active')) {
                    all_panels.removeClass('active').slideUp();
                    acc_inner.addClass('active').slideDown();
                    all_titles.removeClass('active');
                    acc_title.addClass('active');
                } else {
                    all_panels.removeClass('active').slideUp();
                    all_titles.removeClass('active');
                }
            });
        }); 
        $(".faq-accord .faq-row > div:first-child .faq-ans").slideDown();
    }
	
	// SCROLL TOP 
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 50) {
			$('#return-to-top').fadeIn(200);
		} else {
			$('#return-to-top').fadeOut(200);
		}
	});
	$('#return-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	});
	
	// Add minus icon for collapse element which is open by default
        $(".collapse.show").each(function(){
        	$(this).prev(".card-header").find(".fa").addClass("fa-caret-down").removeClass("fa-arrow-up");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
        	$(this).prev(".card-header").find(".fa").removeClass("fa-arrow-up").addClass("fa-caret-down");
        }).on('hide.bs.collapse', function(){
        	$(this).prev(".card-header").find(".fa").removeClass("fa-caret-down").addClass("fa-arrow-up");
        });
		
	//GALLERY POPUP
	var gallery = $('.popup-gallery');
	if (gallery.length) {
		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function (item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}
			}
		});
	}
	
	//POPUP FORM
		var fadeandscale = $('#fadeandscale');
		if (fadeandscale.length) { 
				$('#fadeandscale').popup({
					pagecontainer: '.container',
					transition: 'all 0.3s'
				});
		}
	 //CONTACT FORM VALIDATION	
	if ($('.form-res, .quote-form, .form-blog').length) {
        $('.form-res, .quote-form, .form-blog').each(function() {
            $(this).validate({
                errorClass: 'error',
                submitHandler: function(form) {
                    $.ajax({
                        type: "POST",
                        url: "mail/mail.php",
                        data: $(form).serialize(),
                        success: function(data) {
                            if (data) {
								$(form)[0].reset();
                                $('.sucessMessage').html('Mail Sent Successfully!!!');
                                $('.sucessMessage').show();
                                $('.sucessMessage').delay(3000).fadeOut();
                            } else {
                                $('.failMessage').html(data);
                                $('.failMessage').show();
                                $('.failMessage').delay(3000).fadeOut();
                            }
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            $('.failMessage').html(textStatus);
                            $('.failMessage').show();
                            $('.failMessage').delay(3000).fadeOut();
                        }
                    });
                }
            });
        });
    }
	
    return false;
    // End of use strict
});