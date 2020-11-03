/* page loader script */
$(window).on('load', function(){
	$(".loader").addClass("hidden");
});

/* owl carousel for add slider */
$(document).ready(function() {
	$('.ad_slider_container').owlCarousel({
		loop: true,
		margin: 25,
		autoplay: true,
		autoplayTimeout: 2500,
		autoWidth:true,
		autoplayHoverPause: true,
		nav: false,
		dots: false
	})
})

/* owl carousel for about slider */
$(document).ready(function() {
var owl = $('.about_slider_container');
	owl.owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		autoplay: true,
		mouseDrag: false,
		nav: false,
		dots: true,
		animateOut: 'fadeOut',
		autoplayTimeout: 5000,
		autoplayHoverPause: true

	});
})

/* owl carousel for category option */
$(document).ready(function() {
var owl = $('.category_slider_container');
	owl.owlCarousel({
		autoWidth:true,
		margin: 15,
		nav: false,
		dots: false,
		autoplayTimeout: 2000,
		autoplayHoverPause: true

	});
})

/* owl carousel for featured boards */
$(document).ready(function() {
	$('.feat_slider_container').owlCarousel({
		margin: 25,
		nav: true,
		dots: false,
		responsiveClass: true,
		responsive: {
		  0: {
		    items: 1
		  },
		  768: {
		    items: 2
		  },
		  991: {
		    items: 3
		  }
		}
	})
})


/* owl carousel for suggested boards */
$(document).ready(function() {
	$('.sugst_slider_container').owlCarousel({
		margin: 25,
		nav: true,
		dots: false,
		responsiveClass: true,
		responsive: {
		  0: {
		    items: 1
		  },
		  768: {
		    items: 2
		  },
		  991: {
		    items: 3
		  }
		}
	})
})

/* owl carousel for popular post */
$(document).ready(function() {
	$('.ppplr_post_slider_container').owlCarousel({
		margin: 25,
		nav: true,
		dots: false,
		autoWidth: true,
		responsiveClass: true,
		responsive: {
		  0: {
		    items: 2
		  },
		  768: {
		    items: 3
		  },
		  991: {
		    items: 4
		  }
		}
	})
})

/* ========================================================== */
/* custom script to hide show featured and suggested board */
$(document).ready(function(){

    $("#feat_slider_container").show();
	$("#sugst_slider_container").hide();


  $("#feat_slider").click(function(){
  	$("#feat_slider").addClass("active");
  	$("#sugst_slider").removeClass("active");

    $("#feat_slider_container").show();
    $("#sugst_slider_container").hide();
  });
  
  $("#sugst_slider").click(function(){
  	$("#feat_slider").removeClass("active");
  	$("#sugst_slider").addClass("active");

    $("#feat_slider_container").hide();
    $("#sugst_slider_container").show();
  });
});

/* main mobile menu collapse */
$(document).ready(function(){
    $("#mobile_menu_collase").click(function(){
    	$(this).toggleClass('expanded_icon');
      $("#mobile_nav").toggleClass('expanded_menu');
    });
});


/* more option toggle */
$(document).ready(function(){
    $(".more_option").click(function(){
    	$(this).children(".more_option_item").toggleClass('expanded_more');
    });
    $(".more_option").mouseleave(function(){
	  $(this).children(".more_option_item").removeClass('expanded_more');
	});
});

/* more option toggle */
$(document).ready(function(){
    $(".sub_nav_container").click(function(){
    	$(this).next().toggleClass('expanded_dropdown');
    	$(this).toggleClass('expanded_dropdown');
    });
    $(".sub_nav_container").parent().mouseleave(function(){
	  $(".sub_nav_container").next().removeClass('expanded_dropdown');
	  $(".sub_nav_container").removeClass('expanded_dropdown');
	});
});

$(document).ready(function(){
    $(".mobile_sub").click(function(){
    	$(this).next().toggleClass('expanded_menu');
    	$(this).parent().toggleClass('expanded_menu');
    });
});