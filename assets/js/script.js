$(window).on('load', function(){
    $(window).scrollTop(0)
    $(".smallLogo").css("display", "none")

})
setTimeout(function(){ 
    $(".welcome").css("display", "none")
    $(".smallLogo").css("display", "block")
}, 2000)

setTimeout(function(){ 
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#hero_id").offset().top
    }, 0);
    $window = $(window)
    window_height = $window.height()
    window_top_position = $window.scrollTop()
    window_bottom_position = (window_top_position + window_height)
    $hero = $(".hero")
    hero_height = $hero.outerHeight()
    hero_top_position = $hero.offset().top
    hero_bottom_position = (hero_top_position + hero_height)
  

    if ((hero_top_position < window_bottom_position)) {
        $(".heroLeft").addClass("heroLeft-animation")
        $(".mentor").addClass("mentor-animation")
        $(".ai").addClass("ai-animation")
        $(".ai").addClass("ai-animation")
        $(".designer").addClass("designer-animation")
        $(".photographer").addClass("photographer-animation")
        $(".cynophilist").addClass("cynophilist-animation")
        $(".heroRight a").addClass("heroRight-animation")
    } else {
    }
}, 3000)

setTimeout(function(){ 
    $("section.openingScreen").css("display", "none")
}, 4000)

