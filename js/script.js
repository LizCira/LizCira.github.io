$(function(){

  $('.projects').hide();
  $('.contact').hide();
  $('.resume').hide();

  $('#projects').click(function(e){
    if ($('.projects').is(':visible')){
      $('.projects').toggle(750);
    } else {
      $('.introElements').hide(500);
      $('.resume').hide(500);
      $('.contact').hide(500);
      $('.projects').toggle(750);
    }
    $('html, body').animate({
      scrollTop: $('.introElements').offset().top
    }, 750);
  });

  $('#contact').click(function(e){
    if ($('.contact').is(':visible')){
      $('.contact').toggle(750);
    } else {
      $('.introElements').hide(500);
      $('.projects').hide(500);
      $('.resume').hide(500);
      $('.contact').toggle(750);
    }
    $('html, body').animate({
      scrollTop: $('.introElements').offset().top
    }, 750);
  });

  $('#resume').click(function(e){
    if ($('.resume').is(':visible')){
      $('.resume').toggle(750);
    } else {
      $('.introElements').hide(500);
      $('.projects').hide(500);
      $('.contact').hide(500);
      $('.resume').toggle(750);
    }
    $('html, body').animate({
      scrollTop: $('.introElements').offset().top
    }, 750);
  });

  $(".link").click(function () {
      $(".link").css("color", "");
      $(this).css("color", "orange");
    });

   $('#rightPanel').on('mouseenter', function () {
       $('#bunny').show();
       $('#randomWords').hide();
   }).on('mouseleave', function () {
       $('#bunny').hide();
        $('#randomWords').show();
    });
    // $("#rightPanel").hover(function() {
    //   // console.log("hovering")
    //   console.log(this)
    //   $(this).attr('src', 'bunny.gif');
    // });

})
