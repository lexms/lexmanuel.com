$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});


/* $('.hill_main').on('load', function() {
  $(".cmt").removeClass("invisible"); 
  $(".loader ").addClass("invisible");
  $(".hill_main ").addClass("slide-in-blurred-top"); 
  $(".font-hero ").addClass("slide-in-elliptic-top-fwd"); 
  $(".year_cmt ").addClass("roll-in-blurred-left"); 
});
 */





$(window).on('load', function() {
  var $window = $(window);
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  var $element_competitions = $(".hill_main");
  var element_competitions_height = $element_competitions.outerHeight();
  var element_competitions_top_position = $element_competitions.offset().top;
  var element_competitions_bottom_position = (element_competitions_top_position + element_competitions_height);


  if ((element_competitions_top_position < window_bottom_position)) {
    $(".all_hill").removeClass("invisible");
    $(".hill_main").addClass("slide-in-blurred-top");
    $(".font-hero ").addClass("slide-in-elliptic-top-fwd"); 
    $(".year_cmt ").addClass("roll-in-blurred-left");  

  } else {

  }
});


$(window).on('load', function() {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let countDown = new Date('Feb 28, 2020 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('_74-2').textContent = Math.floor(distance / (day)),
      document.getElementById('_87-2').textContent = Math.floor((distance % (day)) / (hour)),
      document.getElementById('_45').textContent = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('_25-2').textContent = Math.floor((distance % (minute)) / second);
    }, second)

});


/* merchandise */
$(window).on('load resize', function(){
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


/* scroll animation */
$(window).on('scroll resize',function(){
  
  var $window = $(window);
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);


    var $element_moonlight = $(".ufo");
    var element_moonlight_height = $element_moonlight.outerHeight();
    var element_moonlight_top_position = $element_moonlight.offset().top +100;
    var element_moonlight_bottom_position = (element_moonlight_top_position + element_moonlight_height);
  

    if ((element_moonlight_top_position < window_bottom_position)) {
      $(".moonlight").removeClass("slide-out-blurred-top");
      $(".moonlight").removeClass("invisible");
      $(".moonlight").addClass("slide-in-blurred-top"); 

      $(".ufo").removeClass("slide-out-blurred-top");
      $(".ufo ").removeClass("invisible");
      $(".ufo").addClass("tilt-in-fwd-tl"); 
      
    } else {
      $(".moonlight ").addClass("slide-out-blurred-top");;
      $(".ufo ").addClass("slide-out-blurred-top");

    }

    var $element_competitions = $(".competitions");
    var element_competitions_height = $element_competitions.outerHeight();
    var element_competitions_top_position = $element_competitions.offset().top;
    var element_competitions_bottom_position = (element_competitions_top_position + element_competitions_height);
  

    if ((element_competitions_top_position < window_bottom_position)) {
      $element_competitions.removeClass("slide-out-blurred-top");
      $element_competitions.removeClass("invisible");
      $element_competitions.addClass("slide-in-blurred-top"); 

    } else {


    }


    var $element_gueststar = $(".gueststar");
    var element_gueststar_height = $element_gueststar.outerHeight();
    var element_gueststar_top_position = $element_gueststar.offset().top;
    var element_gueststar_bottom_position = (element_gueststar_top_position + element_gueststar_height);
  

    if ((element_gueststar_top_position < window_bottom_position)) {
      $(".gueststar").addClass("bounce-in-fwd"); 
      $(".gueststar").removeClass("invisible");

    } else {
 
      $(".gueststar").removeClass("bounce-in-fwd"); 

    }

    var $element_rundown = $(".swoosh");
    var element_rundown_height = $element_rundown.outerHeight();
    var element_rundown_top_position = $element_rundown.offset().top;
    var element_rundown_bottom_position = (element_rundown_top_position + element_rundown_height);
  

    if ((element_rundown_top_position < window_bottom_position)) {
      $(".swoosh").removeClass("slide-out-bck-center");
      $(".swoosh").removeClass("invisible");
      $(".swoosh").addClass("wobble-hor-bottom"); 

    } else {
      $(".swoosh ").addClass("slide-out-bck-center");
      $(".swoosh").removeClass("wobble-hor-bottom"); 

    }

    var $element_whattobring = $(".whattobring");
    var element_whattobring_height = $element_whattobring.outerHeight();
    var element_whattobring_top_position = $element_whattobring.offset().top;
    var element_whattobring_bottom_position = (element_whattobring_top_position + element_whattobring_height);
  

    if ((element_whattobring_top_position < window_bottom_position)) {
      $(".whattobring").removeClass("invisible");
      $(".whattobring").addClass("jello-diagonal-2"); 

    } else {
      $(".whattobring").removeClass("jello-diagonal-2"); 

    }

    var $element_prohibitedthings = $(".prohibitedthings");
    var element_prohibitedthings_height = $element_prohibitedthings.outerHeight();
    var element_prohibitedthings_top_position = $element_prohibitedthings.offset().top;
    var element_prohibitedthings_bottom_position = (element_prohibitedthings_top_position + element_prohibitedthings_height);
  

    if ((element_prohibitedthings_top_position < window_bottom_position)) {
      $(".prohibitedthings").removeClass("invisible");
      $(".prohibitedthings").addClass("jello-diagonal-2"); 

    } else {
      $(".prohibitedthings").removeClass("jello-diagonal-2"); 

    }

    
    var $element_scrollmerchandise = $(".bigearth");
    var element_scrollmerchandise_height = $element_scrollmerchandise.outerHeight();
    var element_scrollmerchandise_top_position = $element_scrollmerchandise.offset().top;
    var element_scrollmerchandise_bottom_position = (element_scrollmerchandise_top_position + element_scrollmerchandise_height);
  

    if ((element_scrollmerchandise_top_position < window_bottom_position)) {
      $(".bigearth").removeClass("invisible");
      $(".bigearth").addClass("heartbeat"); 

    } else {
      $(".bigearth").removeClass("heartbeat"); 

    }

    var $element_map = $(".map");
    var element_map_height = $element_map.outerHeight();
    var element_map_top_position = $element_map.offset().top;
    var element_map_bottom_position = (element_map_top_position + element_map_height);
  

    if ((element_map_top_position < window_bottom_position)) {
      $(".map").removeClass("invisible");
      $(".map").addClass("jello-horizontal"); 

    } else {
      $(".map").removeClass("jello-horizontal"); 

    }


    var $element_registbox = $(".regist-box");
    var element_registbox_height = $element_registbox.outerHeight();
    var element_registbox_top_position = $element_registbox.offset().top;
    var element_registbox_bottom_position = (element_registbox_top_position + element_registbox_height);
  

    if ((element_registbox_top_position < window_bottom_position)) {
      $(".regist-box").removeClass("invisible");
      $(".regist-box").addClass("shake-lr"); 

    } else {
      $(".regist-box").removeClass("shake-lr"); 

    }


    var $element_campdaimuda = $(".campdaimuda");
    var element_campdaimuda_height = $element_campdaimuda.outerHeight();
    var element_campdaimuda_top_position = $element_campdaimuda.offset().top;
    var element_campdaimuda_bottom_position = (element_campdaimuda_top_position + element_campdaimuda_height);
  

    if ((element_campdaimuda_top_position < window_bottom_position)) {
      $(".campdaimuda").removeClass("invisible");
      $(".campdaimuda").addClass("vibrate-2"); 

    } else {
      $(".campdaimuda").removeClass("vibrate-2"); 

    }

    
});




/* 
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll'); */


