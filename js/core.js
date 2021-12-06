
// Add animation class on screen scroll NEW
  $(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#dynamic').addClass('newClass');
    } else {
       $('#dynamic').removeClass('newClass');
    }
  });

// Add animation class on screen scroll OLD - Example: http://honeypotdigital.dev6.oddev.co.nz/
     const observer = new IntersectionObserver(entries => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           entry.target.classList.add('active-state');
         }
          else {
            entry.target.classList.remove('active-state');
          }
       });
    });
    observer.observe(document.querySelector('.features-container'));
    observer.observe(document.querySelector('.banner-container'));

// Swiper Slider
  var swiper = new Swiper(".eventSlider", {
    loop: true,
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
    autoplay: {
      delay: 3500,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

//  Hamburger Toggle Menu
  $(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("active");
      $('.mobile-nav').toggleClass("active");
    });
  });

//  Gallery Item Click - Example: http://kaiiwicamp.dev6.oddev.co.nz/gallery
   $(document).ready(function(){
     $('.gal-container').click( function(){
       if ( $(this).hasClass('active') ) {
         $(this).removeClass('active');
       } else {
         $(this).addClass('active');
       }
    });
  });

//  Sticky Header
  window.onscroll = function() {myFunction()};
  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

//  Toggle - Used For Active Classes and Accordions
  $(document).ready(function(){
    $(".drop-item").click(function(){
      $(this).toggleClass("drop");
    });
  });

  // Popup
  $(document).ready(function(){
    setTimeout(function() {
      $('.eighteen-plus-container').addClass('eighteen-active');
    }, 2000);
    $('.yes-to-eighteen').click( function(){
      $('.eighteen-plus-container').removeClass('eighteen-active');
    });
  });

  // Popup show once
  $(document).ready(function() {
      $('.signup').addClass('newsletter-pop-active');
      $PopUp = $('.signup');
      var hide = JSON.parse(localStorage.getItem('hide'));
      if (hide) {
          $PopUp.hide();
      } else {
          // initialize value in case it hasn't been set already
          localStorage.setItem('hide', false);
      }
      $('.signup .close-icon, .signup .overlay-bak').click(function() {
          $('.signup' ).hide();
          // toggle the boolean by negating its value
          var hide = JSON.parse(localStorage.getItem('hide'));
          localStorage.setItem('hide', !hide);
      });

  });
