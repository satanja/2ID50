$(document).ready(function() {

  $('.coltext1').hide();
  $('.coltext2').hide();
  $('.coltext3').hide();

  $("#mainButton").click(function() {
      $('html,body').animate({
          scrollTop: $("#mainButtonScrollEnd").offset().top
        },3000);
  });

  $("#colButton1").click(function() {
      $('.coltext1').slideToggle(1000);
  });

  $("#colButton2").click(function() {
      $('.coltext2').slideToggle(1000);
  });

  $("#colButton3").click(function() {
      $('.coltext3').slideToggle(1000);
  });

});
