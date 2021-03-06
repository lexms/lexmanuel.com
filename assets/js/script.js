$(window).on("load", function () {
  $(window).scrollTop(0);
});
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 20) {
    $(".btn-goTop").css("display", "block");
  } else {
    $(".btn-goTop").css("display", "none");
  }
});
function goTop() {
  $(window).scrollTop(0);
}

let userAgentString = navigator.userAgent;
let chromeAgent = userAgentString.indexOf("Chrome") > -1;
let safariAgent = userAgentString.indexOf("Chrome") > -1;
if (chromeAgent && safariAgent) {
  safariAgent = false;
}
if (safariAgent) {
  console.log(safariAgent);
  $(document).ready(function () {
    $("a").on("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    });
  });
}

setTimeout(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#hero_id").offset().top,
    },
    0
  );
  $(".heroLeft").addClass("heroLeft-animation");
  $(".mentor").addClass("mentor-animation");
  $(".ai").addClass("ai-animation");
  $(".ai").addClass("ai-animation");
  $(".designer").addClass("designer-animation");
  $(".photographer").addClass("photographer-animation");
  $(".cynophilist").addClass("cynophilist-animation");
  $(".heroRight a").addClass("heroRight-animation");
}, 3000);

setTimeout(function () {
  $("section.openingScreen").css("display", "none");
  $(".primaryBox").css("opacity", "1");
}, 5000);
