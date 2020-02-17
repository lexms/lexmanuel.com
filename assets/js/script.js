$(window).on('load', function(){
    $(window).scrollTop(0)

})
// setTimeout(function(){ 
//     $(".welcome").css({
//         "opacity":"0",
//         "display":"none"
//     })
//     $(".smallLogo").css({
//         "opacity":"1",
//         "display":"block"
//     })
// }, 1500)

setTimeout(function(){ 
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#hero_id").offset().top
    }, 0);
    $(".heroLeft").addClass("heroLeft-animation")
    $(".mentor").addClass("mentor-animation")
    $(".ai").addClass("ai-animation")
    $(".ai").addClass("ai-animation")
    $(".designer").addClass("designer-animation")
    $(".photographer").addClass("photographer-animation")
    $(".cynophilist").addClass("cynophilist-animation")
    $(".heroRight a").addClass("heroRight-animation")
}, 3000)

setTimeout(function(){ 
    $("section.openingScreen").css("display", "none")
    $(".primaryBox").css("opacity","1")

}, 4000)

