// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}


//
// function hamburgerMenu() {
//   var x = document.getElementById("Hamburger");
//   if (x.className === "hamburger") {
//     x.className += " active";
//   } else {
//     x.className = "hamburger";
//   }
//   var x = document.getElementById("nav");
//   if (x.className === "menu") {
//     x.className += " active";
//   } else {
//     x.className = "menu";
//   }
// }
$(document).ready(function() {

  $(".hamburger").click(function() {
    $(".overlay").fadeToggle(200);
  });
});

$('.overlay').on('click', function() {
  $(".overlay").fadeToggle(200);

  open = false;
});

var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
  $hamburger.toggleClass("is-active"), $(".overlay").fadeToggle(200);
  // Do something else, like open / close menu
});
var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
  $hamburger.removeclass("is-active");

});
