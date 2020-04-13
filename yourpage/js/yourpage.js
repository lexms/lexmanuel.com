var noBtn = $("#noBtn"),
    yesBtn = $("#yesBtn")
    box = $("#box");

var x = document.getElementById("playit"); 
function playAudio() { 
  x.play();
  alert('YESSS!');
  $('.sendingvirtualhand').fadeIn() 
} 
function foo()
{
    var randX = Math.floor(Math.random() * (window.innerWidth - 500));
    var randY = Math.floor(Math.random() * (window.innerHeight - 500));
    console.log([randX, randY]);
    noBtn.stop().animate({"left": randX + "px", "top": randY + "px"});
}
$('.loading').hide()
$('.ml16').delay(3000).fadeOut();
setTimeout(function () {      
  $('.2nd').removeClass('hidden')     
}, 4000);
setTimeout(function () {    
  $('.2nd').fadeOut()         
}, 7000);
setTimeout(function () {      
  $('.3rd').removeClass('hidden')     
}, 7500);
setTimeout(function () {      
  $('.3rd').fadeOut()     
}, 9500);



  



setTimeout(function () {      
  if (navigator.userAgent.match(/Android/i) 
  || navigator.userAgent.match(/webOS/i) 
  || navigator.userAgent.match(/iPhone/i)  
  || navigator.userAgent.match(/iPad/i)  
  || navigator.userAgent.match(/iPod/i) 
  || navigator.userAgent.match(/BlackBerry/i) 
  || navigator.userAgent.match(/Windows Phone/i)) { 
    amobile = true; 
  } else { 
    amobile = false; 
  }
  if (($(window).width() <= 800) || (amobile == true)) {
    $('#yourpage').fadeOut()
    $('.loading').fadeIn()
    alert('Please open it with your laptop :)');
  }   
}, 0);



setTimeout(function () {      
  $('.4th').fadeIn()     
}, 10500);
setTimeout(function () {      
  $('.4th').addClass('blur-out-expand-fwd')    
}, 14000);



setTimeout(function () {      
  $('.5th').fadeIn()
     
}, 15000);

addbut = 15000
for (let i = 0; i < 4; i++) {
  setTimeout(function () {      
    $('.but').clone().appendTo('.5th');    
  }, addbut);
  addbut = 200 + addbut 
}

setTimeout(function () {      
  $('.5th').addClass('text-flicker-out-glow')    
}, 16000);
setTimeout(function () {      
  $('.5th').fadeOut()  
}, 18000);

setTimeout(function () {      
  $('#yourpage').css("background-color", "black");
}, 17000);
setTimeout(function () {
  $('.6th').fadeIn()      
  $('.6th').addClass('text-flicker-in-glow')
}, 18500);

setTimeout(function () {      
  $('#yourpage').css('background-color', '#005cb2');
}, 22000);

setTimeout(function () {
  $('.6th').fadeOut()      
  $('.6th').addClass('text-flicker-in-glow')
}, 23000);

setTimeout(function () {
  $('.7th').fadeIn()      
  $('.7th').addClass('text-pop-up-top')
}, 24000);

setTimeout(function () {      
  $('#yourpage').css('background-color', 'khaki');
}, 25500);

setTimeout(function () {
  $('.7th').fadeOut()      

}, 27000);

setTimeout(function () {
  $('.questionBox').css('display','flex')
  $('.questionBox').addClass('scale-in-center')     

}, 28000);



$(document).ready(function() {
    noBtn.on('mouseenter', foo);
    noBtn.on('click', function(){
        alert('Owh no it\'s clicked');
    });
    yesBtn.on('click', function(){
        alert('YESSS!!!');
        $('.sendingvirtualhand').fadeIn()
    }); 
});
/* dsadsad */


// Wrap every letter in a span
anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });




/* ml16 */
var ml16 = document.querySelector('.ml16');
ml16.innerHTML = ml16.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml16 .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml16',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  /* ml15 */
anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });





/* burst click  */
const COLORS = {
    RED: "#FD5061",
    YELLOW: "#FFCEA5",
    BLACK: "#29363B",
    WHITE: "white",
    VINOUS: "#A50710" };
  
  
  const burst1 = new mojs.Burst({
    left: 0,
    top: 0,
    count: 8,
    radius: { 50: 150 },
    children: {
      shape: "line",
      stroke: ["white", "#FFE217", "#FC46AD", "#D0D202", "#B8E986", "#D0D202"],
      scale: 1,
      scaleX: { 1: 0 },
      // pathScale:    'rand(.5, 1.25)',
      degreeShift: "rand(-90, 90)",
      radius: "rand(20, 40)",
      // duration:     200,
      delay: "rand(0, 150)",
      isForce3d: true } });
  
  
  
  const largeBurst = new mojs.Burst({
    left: 0,
    top: 0,
    count: 4,
    radius: 0,
    angle: 45,
    radius: { 0: 450 },
    children: {
      shape: "line",
      stroke: "#4ACAD9",
      scale: 1,
      scaleX: { 1: 0 },
      radius: 100,
      duration: 450,
      isForce3d: true,
      easing: "cubic.inout" } });
  
  
  
  const CIRCLE_OPTS = {
    left: 0,
    top: 0,
    scale: { 0: 1 } };
  
  
  const largeCircle = new mojs.Shape({
    ...CIRCLE_OPTS,
    fill: "none",
    stroke: "white",
    strokeWidth: 4,
    opacity: { 0.25: 0 },
    radius: 250,
    duration: 600 });
  
  
  const smallCircle = new mojs.Shape({
    ...CIRCLE_OPTS,
    fill: "white",
    opacity: { 0.5: 0 },
    radius: 30 });
  
  
  document.addEventListener("click", function (e) {
    burst1.tune({ x: e.pageX, y: e.pageY }).generate().replay();
  
    largeBurst.tune({ x: e.pageX, y: e.pageY }).replay();
  
    largeCircle.tune({ x: e.pageX, y: e.pageY }).replay();
  
    smallCircle.tune({ x: e.pageX, y: e.pageY }).replay();
  });