/* $(document).load(function(){


    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        
        if (scroll > 0.5) {
          $(".hill_main img").removeClass("d-none"); 
          $(".hill_main ").addClass("slide-in-blurred-top"); 
        }
        else{
          $(".hill_main").removeClass("slide-in-blurred-top"); 
        }
})

})
 */

/* $(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});
 */
$(window).on('load', function() {
  $(".cmt").removeClass("invisible"); 
  $(".loader ").addClass("invisible");
  $(".hill_main ").addClass("slide-in-blurred-top"); 
  $(".font-hero ").addClass("slide-in-elliptic-top-fwd"); 
  $(".year_cmt ").addClass("roll-in-blurred-left"); 

  /* set height heightscrollinside */
  if ($(window).width() >= 800) {
    var widthWindow = $(window).width();
    var widthSnap = 0.7 * widthWindow;
    var heightSnap = widthSnap;
    /* var heightscrollsnap = parseInt($(".scroll-merchandise").css( "height")); */
    var heightscrollinside = heightSnap - 250;
    $(".scroll-merchandise-children-box").height(heightscrollinside);
    $(".scroll-merchandise").height(heightSnap);
  }else{
    var widthWindow = $(window).width();
    var widthSnap = 0.7 * widthWindow;
    var heightSnap = 600/334 * widthSnap;
    /* var heightscrollsnap = parseInt($(".scroll-merchandise").css( "height")); */
    var heightscrollinside = heightSnap - 150;
    $(".scroll-merchandise-children-box").height(heightscrollinside);
    $(".scroll-merchandise").height(heightSnap);
  }

});

$(window).on('resize', function(){
  /* set height heightscrollinside */
  if ($(window).width() >= 800) {
    var widthWindow = $(window).width();
    var widthSnap = 0.7 * widthWindow;
    var heightSnap = widthSnap;
    /* var heightscrollsnap = parseInt($(".scroll-merchandise").css( "height")); */
    var heightscrollinside = heightSnap - 250;
    $(".scroll-merchandise-children-box").height(heightscrollinside);
    $(".scroll-merchandise").height(heightSnap);
  }else{
    var widthWindow = $(window).width();
    var widthSnap = 0.7 * widthWindow;
    var heightSnap = 600/334 * widthSnap;
    /* var heightscrollsnap = parseInt($(".scroll-merchandise").css( "height")); */
    var heightscrollinside = heightSnap - 150;
    $(".scroll-merchandise-children-box").height(heightscrollinside);
    $(".scroll-merchandise").height(heightSnap);
  }
});

