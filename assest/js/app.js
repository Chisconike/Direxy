$(document).ready(function () {

  // for Nav Bar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar").css("background-color", "white");
      $(".btns").removeClass("btn-light").addClass("btn-dark text-white");
    } else {
      $(".navbar").css("background-color", "rgba(0, 0, 0, 0.20)");
      $(".btn.btn-dark.text-white").removeClass("btn-dark text-white").addClass("btn-light");
    }
  });

  // Carousel for HomePage Slider
  $('#slide_1').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })

  // Slider for section 2
  $('#slide_2').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })

  // Control slider for section2
  var currentSlide = 0;
  $(".control").on("click", function () {
    currentSlide++;
    $("#slide_2").trigger("next.owl.carousel");
    if (currentSlide === $(".owl-item").length - 1) {
      currentSlide = 0;
    }
  });

  // Slider for thumbnail under section2
  $('#slide_3').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    // nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })

  // Brand Section 
  $('.top_left_hover').hover(function () {
    $(this).attr('src', './assest/img/section3d.jpg');
  }, function () {
    $(this).attr('src', './assest/img/section3a.jpg');
  });

  $('.top_right_hover').hover(function () {
    $(this).attr('src', './assest/img/section3c.jpg');
  }, function () {
    $(this).attr('src', './assest/img/section3b.jpg');
  });

  $('.bottom_left_hover').hover(function () {
    $(this).attr('src', './assest/img/section3h.jpg');
  }, function () {
    $(this).attr('src', './assest/img/section3e.jpg');
  });

  $('.bottom_right_hover').hover(function () {
    $(this).attr('src', './assest/img/section3g.jpg');
  }, function () {
    $(this).attr('src', './assest/img/section3f.jpg');
  });


  // Section3 Image swap 
  var defaultImageSrc = $('.main').attr('src');

  $('.img_1').hover(function () {
    var newImageSrc = $(this).attr('src');
    $('.main').attr('src', newImageSrc);
  }, function () {
    $('.main').attr('src', defaultImageSrc);
  });

  $('.img_2').hover(function () {
    var newImageSrc = $(this).attr('src');
    $('.main').attr('src', newImageSrc);
  }, function () {
    $('.main').attr('src', defaultImageSrc);
  });

  $('.img_3').hover(function () {
    var newImageSrc = $(this).attr('src');
    $('.main').attr('src', newImageSrc);
  }, function () {
    $('.main').attr('src', defaultImageSrc);
  });

  $('.img_4').hover(function () {
    var newImageSrc = $(this).attr('src');
    $('.main').attr('src', newImageSrc);
  }, function () {
    $('.main').attr('src', defaultImageSrc);
  });

  $('.img_5').hover(function () {
    var newImageSrc = $(this).attr('src');
    $('.main').attr('src', newImageSrc);
  }, function () {
    $('.main').attr('src', defaultImageSrc);
  });

  $('.img_6').hover(function () {
    var newImageSrc = $(this).attr('src');
    $('.main').attr('src', newImageSrc);
  }, function () {
    $('.main').attr('src', defaultImageSrc);
  });


  // Slider for section4
  $('#slide_4').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  })
  // Control slider for section4
  $("#next_slider").on("click", function () {
    $("#slide_4").trigger("next.owl.carousel");
  });

  // Footer Back to Top
  $(".back_to_top_btn").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });


  // For Scroll

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  let smoother = ScrollSmoother.Create({
    wrapper: '#wrapper',
    content: '.main',
  })

  // For Flip



});