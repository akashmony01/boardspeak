/* script for notification tabs */
$(document).ready(function(){

	$("#not_summary").show();
	$("#not_setting").hide();


  	$("#summary_tab_btn").click(function(){
  		
	  	$("#summary_tab_btn").addClass("active");
	  	$("#setting_tab_btn").removeClass("active");

	    $("#not_summary").show();
	    $("#not_setting").hide();
  	});
  
  	$("#setting_tab_btn").click(function(){
	  	$("#summary_tab_btn").removeClass("active");
	  	$("#setting_tab_btn").addClass("active");

	    $("#not_summary").hide();
	    $("#not_setting").show();
	});

});

/* notification filter tab slider */
$(document).ready(function() {
	var owl = $('.not_filter');
	owl.owlCarousel({
		autoWidth:true,
		margin: 0,
		nav: false,
		dots: false,
		autoplayTimeout: 2000,
		autoplayHoverPause: true

	});
})


/* notification switch script */
$(document).ready(function(){
    $(".not_setting_status").click(function(){
      $(this).toggleClass('on');
    });
});


/* customs script for filtering NOTIFICATION tabs */
$(document).ready(function(){
  $(".not_filter_btn").click(function(){
    var tab_id = $(this).attr('selected_tab_id');
    
    $(".not_filter_btn").removeClass("active");
    $(this).addClass("active");
    
    if (tab_id == "all_not") {
      
      $(".not_tab").show();
    }else{

      $(".not_tab").hide();
      $("." + tab_id).show();
    }
  });
});