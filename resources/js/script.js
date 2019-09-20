$(document).ready(function(){

  /* For sticky nav bar */
  $(".js--section-features").waypoint(function(direction){
    if(direction == "down") {
      $("nav").addClass("sticky");
      $(".ion-navicon-round").css("color", "#555");
    }
    else if(direction == "up") {
      $("nav").removeClass("sticky");
      $(".ion-navicon-round").css("color", "#fff");
    }

  }, {
    offset: '60px;'
  });

  /* Button nav scroll */
  $(".js--scroll-to-plans").click(function(){
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
  });
  $(".js--scroll-to-start").click(function(){
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  });


  /* Smooth scrolling */
  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
        }
      }
    });
  });

  /* Animations */
  $(".js--wp-1").waypoint(function(direction){
    $(".js--wp-1").addClass('animated fadeIn');
  },{
    offset:'50%;'
  });
  $(".js--wp-2").waypoint(function(direction){
    $(".js--wp-2").addClass('animated fadeInUp');
  },{
    offset:'50%;'
  });
  $(".js--wp-3").waypoint(function(direction){
    $(".js--wp-3").addClass('animated fadeIn');
  },{
    offset:'50%;'
  });
  $(".js--wp-4").waypoint(function(direction){
      $(".js--wp-4").addClass('animated pulse');
  },{
    offset:'50%;'
  });



  /* Mobile navigation*/
  $('.js-nav-icon').on("click", function(){
    var nav = $(".main-nav");
    var icon = $(".js-nav-icon i");

    nav.slideToggle(200);
    if (icon.hasClass('ion-navicon-round')){
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }

  });

});
