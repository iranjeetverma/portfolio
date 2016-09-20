$(window).bind('scroll', function(){
    setOpacity();
});

function setOpacity(){
  var offset = $(window).scrollTop();
  var op = 1-offset/600 < 0 ? 0 : 1-offset/600;
  $(".intro-container").css("opacity", op);
  $(".scroll-container").css("opacity", op);
}
setOpacity();

$(".more-info").click(function(e){
  $(e.target).hide(300);
  $(e.target).next(".image-container").children(".showcase-image").fadeIn();
  $(e.target).next(".image-container").next(".close-info").show(300);
})

$(".close-info").click(function(e){
  $(e.target).hide();
  $(e.target).prev(".image-container").children(".showcase-image").fadeOut();
  $(e.target).prev(".image-container").prev(".more-info").show(300);
})
