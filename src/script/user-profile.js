/* created boards styles */
/* ====================================================================== */
/* owl carousel for created groups */
$(document).ready(function() {
  $('.created_group_slider').owlCarousel({
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

/* owl carousel for created topics */
$(document).ready(function() {
  $('.created_topic_slider').owlCarousel({
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

/* owl carousel for created topics */
$(document).ready(function() {
  $('.created_post_slider').owlCarousel({
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








/* followed boards styles */
/* ====================================================================== */
/* owl carousel for followed groups */
$(document).ready(function() {
  $('.follow_group_slider').owlCarousel({
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

/* owl carousel for followed topics */
$(document).ready(function() {
  $('.follow_topic_slider').owlCarousel({
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

/* owl carousel for followed posts */
$(document).ready(function() {
  $('.follow_post_slider').owlCarousel({
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







/* explore boards styles */
/* ====================================================================== */
/* owl carousel for explore groups */
$(document).ready(function() {
  $('.explore_group_slider').owlCarousel({
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

/* owl carousel for explore topics */
$(document).ready(function() {
  $('.explore_topic_slider').owlCarousel({
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


/* owl carousel for explore posts */
$(document).ready(function() {
  $('.explore_post_slider').owlCarousel({
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

/* ========================================================== */
/* custom script to hide show followed and explore board */
$(document).ready(function(){

  $("#follow_slider_container").show();
	$("#explore_slider_container").hide();
  $("#created_slider_container").hide();


  $("#follow_slider").click(function(){
  	
    $("#explore_slider").removeClass("active");
    $("#created_slider").removeClass("active");

  	$("#follow_slider").addClass("active");

    $("#follow_slider_container").show();
    $("#explore_slider_container").hide();
    $("#created_slider_container").hide();
  });
  
  $("#explore_slider").click(function(){
  	
    $("#follow_slider").removeClass("active");
    $("#created_slider").removeClass("active");

  	$("#explore_slider").addClass("active");

    $("#explore_slider_container").show();
    $("#follow_slider_container").hide();
    $("#created_slider_container").hide();
  });

  $("#created_slider").click(function(){
    
    $("#follow_slider").removeClass("active");
    $("#explore_slider").removeClass("active");

    $("#created_slider").addClass("active");

    $("#created_slider_container").show();
    $("#explore_slider_container").hide();
    $("#follow_slider_container").hide();
  });
});

/* filter button slider */
$(document).ready(function() {
var owl = $('.follow_explore_filter_btn');
  owl.owlCarousel({
    autoWidth:true,
    margin: 15,
    nav: false,
    dots: false
  });
})


/* dropdown list script */
$(document).ready(function(){
    $(".filter_dropdown_btn").click(function(){
      $(this).next().toggleClass('expanded_dropdown');
      $(this).toggleClass('expanded_dropdown');
    });
    $(".filter_dropdown_btn").parent().mouseleave(function(){
      $(".filter_dropdown_btn").next().removeClass('expanded_dropdown');
      $(".filter_dropdown_btn").removeClass('expanded_dropdown');
  });
});



/* owl carousel for popular post section */
$(document).ready(function() {
  $('.user_popular_post_container').owlCarousel({
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


/* customs script for filtering groups post topic */
$(document).ready(function(){
  $(".filter_btn").click(function(){
    var data_board = $(this).attr('filtered_board');
    
    $(".filter_btn").removeClass("active");
    $(this).addClass("active");
    
    if (data_board == "all_board") {
      
      $(".slider_outer").show();
    }else{

      $(".slider_outer").hide();
      $("." + data_board).show();
    }
  });
});



/* owl carousel for ad section */
/* =================================================== */
/* owl carousel for add slider */
$(document).ready(function() {
  $('.user_ad_slider').owlCarousel({
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


/* popup script */
/* =================================================== */
$(document).ready(function(){
  $("#todos_popup_opener").click(function(){
    $(".todos_not_popup").addClass('popped');
  });

  $(".todos_popup_closer").click(function(){
    $(".todos_not_popup").removeClass('popped');
  });
});

// create group popup
$(document).ready(function(){
  $(".create_group_btn").click(function(){
    $(".create_group_popup").addClass('popped');
  });

  $(".create_group_popup_closer").click(function(){
    $(".create_group_popup").removeClass('popped');
  });
});

// modal script unfollow
$(document).ready(function(){
	$(".unfollow_popup_opener").click(function(){
	  $(".unfollow_popup").addClass('popped');
	});
  
	// close srcrpt
	$(".unfollow_popup_closer").click(function(){
		$(".unfollow_popup").removeClass('popped');
	});
});

// problem popup script
$(document).ready(function(){
	$(".problem_popup_opener").click(function(){
	  $(".problem_popup").addClass('popped');
	});
  
	// close srcrpt
	$(".problem_popup_closer").click(function(){
		$(".problem_popup").removeClass('popped');
	});
});

// notfication popup script
$(document).ready(function(){
	$(".not_popup_opener").click(function(){
	  $(".not_popup").addClass('popped');
	});
  
	// close srcrpt
	$(".not_popup_closer").click(function(){
		$(".not_popup").removeClass('popped');
	});
});


// follower popup script
$(document).ready(function(){

	$(".follower_popup_opener").click(function(){
    var data = $(this).attr('follow_data');
    
    $(".follower_popup_nav > li").removeClass("active");
    $(".follower_popup_nav > li[follow_data=" + data + "]").addClass("active");
    
    $(".follower_content_item").removeClass('active');
    $("." + data).addClass('active');

    // open popup
	  $(".follower_popup").addClass('popped');
	});
  
	// close srcrpt
	$(".follower_popup_closer").click(function(){
		$(".follower_popup").removeClass('popped');
  });
  

  // script for follower and following
  /* customs script for filtering NOTIFICATION tabs */
  $(".follower_popup_nav > li").click(function(){
    var data = $(this).attr('follow_data');
    
    $(".follower_popup_nav > li").removeClass("active");
    $(this).addClass("active");
    
    $(".follower_content_item").removeClass('active');
    $("." + data).addClass('active');
  });
});


// contacts popup script
$(document).ready(function(){

	$(".contact_popup_opener").click(function(){
    // open popup
	  $(".contact_popup").addClass('popped');
	});
  
	// close srcrpt
	$(".contact_popup_closer").click(function(){
		$(".contact_popup").removeClass('popped');
  });
  

  // script for contact and following
  /* customs script for filtering NOTIFICATION tabs */
  $(".contact_popup_nav > li").click(function(){
    var data = $(this).attr('contact_data');
    
    $(".contact_popup_nav > li").removeClass("active");
    $(this).addClass("active");
    
    $(".contact_content_item").removeClass('active');
    $("." + data).addClass('active');
  });


});



// sticky search bar script
$(document).ready(function(){
  var searchPosition =  $("#sticky_search").position().top;

  $(window).scroll(function () { 
    var scroll = $(window).scrollTop(); 

    if (scroll > searchPosition) { 
        $("#sticky_search").addClass('sticky_search');
    } else { 
       $("#sticky_search").removeClass('sticky_search');
    } 
  });

});




// option toggler switch
// ===================================
$(document).ready(function(){
	$(".option_switch").click(function(){
	  $(this).toggleClass('on');
	});
});