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


$(window).on('load', function() {
  $(".cmt").removeClass("invisible"); 
  $(".loader ").addClass("invisible");
  $(".hill_main ").addClass("slide-in-blurred-top"); 
  $(".font-hero ").addClass("slide-in-elliptic-top-fwd"); 
  $(".year_cmt ").addClass("roll-in-blurred-left"); 
});

