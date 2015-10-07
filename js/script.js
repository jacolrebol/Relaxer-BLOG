$(document).ready(function(){

  function toggleText() {
    if($(this).html() == "Read More")
        $(this).html("Read Less");
    else
        $(this).html("Read More");
    $(this).prev(".more_text").slideToggle(70);
  }

  $(".read_more").on("click", toggleText);


});
