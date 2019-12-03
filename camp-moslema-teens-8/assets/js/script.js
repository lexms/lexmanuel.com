$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $('#main-navbar').css('background','rgba(255,255,255,1)');
          $('#main-navbar').css('box-shadow','0px 3px 6px rgba(0, 0, 0, 0.16)');
          $('.navbar-brand img').css('width','30px');
          $('.navbar-brand img').css('height','33px');
        }
        else{
            $('#main-navbar').css('background','transparent');
            $('#main-navbar').css('box-shadow','0px 3px 6px rgba(0, 0, 0, 0.0)');
            $('.navbar-brand img').css('width','90px');
            $('.navbar-brand img').css('height','100px'); 	
        }
})

})