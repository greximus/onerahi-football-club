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


$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("active");
      $(".mobile-nav").toggleClass("active");
    });
  });
