$(document).ready(function() {
  $("p").click(function() {
    console.log("p clicked");
    $(".walrus-showing").slideToggle();
    $(".walrus-hidden").toggle();
  });
});
