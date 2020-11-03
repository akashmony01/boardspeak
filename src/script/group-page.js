// more dropdwon styles
$(document).ready(function(){
	$(".secondery_btn").click(function(){
		// button class slided toggle
		$(this).toggleClass("slided");
		// parent class add
		$(this).parent().toggleClass("slided");
		// secondery menu toggle class
		$(this).next(".secondery_dropdown").toggleClass("slided");
	});

	// hide on mouse leave
	$(".secondery_item").mouseleave(function(){
		$(this).removeClass("slided");
		$(".secondery_btn").removeClass("slided");
		$(".secondery_dropdown").removeClass("slided");
	});
});

// modal scrpt for add members
$(document).ready(function(){
	$(".invite_member_btn").click(function(){
	  $(".modal_container").addClass('popped');
	  $(".invite_members").addClass('popped');
	});
  
	// close srcrpt
	$(".invite_members_closer").click(function(){
		$(".modal_container").removeClass('popped');
		$(".invite_members").removeClass('popped');
	});
});


// modal scrpt for user role
$(document).ready(function(){
	$(".user_role_btn").click(function(){
	  $(".modal_container").addClass('popped');
	  $(".user_role").addClass('popped');
	});
  
	// close srcrpt
	$(".invite_members_closer").click(function(){
		$(".modal_container").removeClass('popped');
		$(".user_role").removeClass('popped');
	});
});

// scrpt for flterng members
$(document).ready(function(){
	$(".role_option").click(function(){
		var role_tab = $(this).attr('role_tab_id');
		
		$(".role_option").removeClass("active");
		$(this).addClass("active");
		
		if (role_tab == "all_members") {

			$(".suggest_members").show();
		}else{
	
			$(".suggest_members").hide();
			$("#" + role_tab).show();
		}
	});
});



// script for modal dropdown
$(document).ready(function(){
	// open script
	$(".role_opener").click(function(){
		var parent = $(this).parents(".role_dropdown");
	  	$(parent).toggleClass('dropped');
	});
	$(".change_role_btn").click(function(){
		var parent = $(this).parents(".role_dropdown");
	  	$(parent).toggleClass('dropped');
	});

	// clsoe script
	$(".role_dropdown").mouseleave(function(){
		$(".role_dropdown").removeClass('dropped');
	});
	$(".role_item").click(function(){
		var value = $(this).html();
		
		var parent = $(this).parents(".role_dropdown");
		var role_opener = $(parent).children(".role_opener");
		
		$(role_opener).html(value)
		
		$(".role_dropdown").removeClass('dropped');
	});
});