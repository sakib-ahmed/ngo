$(document).ready(function(){
  // Primary Navigtion Menu
  $('#main-nav').on('click', function(e){
    e.preventDefault();
    $('.nav-collapse').toggleClass('nav-is-collapsed');
  });


  $(window).scroll(function(){
    var viewport_width = $(window).width();

    if ($(document).scrollTop() > 100 && viewport_width > 991) {
      $('.primary-nav').addClass('primary-nav-fixed');
    } else {
      $('.primary-nav').removeClass('primary-nav-fixed');
    }
  });
  
  /*
    ====================================
    Percircle
    ====================================
  */
  $("#custom-color").percircle({
    progressBarColor: '#243182'
  });
});
