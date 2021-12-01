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



$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $(".hamburger span").css({"background-color":"#fff"});
        }
        else{
            $(".hamburger span").css({"background-color":"#ffd100"});
        }

    })
})
