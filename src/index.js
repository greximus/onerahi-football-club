// JS Goes here - ES6 supported

import "./css/main.css";


// HAMBURGER

$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("active");
    $('.mobile-nav').toggleClass("active");
  });
});

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");
