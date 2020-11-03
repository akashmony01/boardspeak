// popup one
$(document).ready(function(){
  $("#non_registered_popup_opener").click(function(){
    $("#non_registered_popup").addClass('popped');
  });
  $("#non_registered_popup_closer").click(function(){
    $("#non_registered_popup").removeClass('popped');
  });
});
// popup two
$(document).ready(function(){
  $("#registered_popup_opener").click(function(){
    $("#registered_popup").addClass('popped');
  });
  $("#registered_popup_closer").click(function(){
    $("#registered_popup").removeClass('popped');
  });
});