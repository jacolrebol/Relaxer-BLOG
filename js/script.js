$(document).ready(function(){

$(".more_text").hide();
$(".read_less").hide();


  function revealAnswer() {
    $(this).hide();
    $(this).next(".more_text").slideToggle(70);
    $(".read_less").show();
  }

  $(".read_more").on("click", revealAnswer)

  function closeAnswer() {
    $(this).hide();
    $(this).prev(".more_text").slideToggle(70);
    $(".read_more").show();
  }

  $(".read_less").on("click", closeAnswer)

});
