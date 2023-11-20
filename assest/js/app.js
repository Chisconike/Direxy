$(document).ready(function () {

  $('#slide_1').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    // nav: true,
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

  $('#slide_2').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    // nav: true,
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

  $('#slide_3').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
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


  $('#slide_6').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
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
        items: 3
      }
    }
  })

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


  // Brand Section
  $('.top_left_hover').hover(function () {
    $(this).attr('src', './assest/img/section3d.png');
  }, function () {
    $(this).attr('src', './assest/img/section3a.png');
  });

  $('.top_right_hover').hover(function () {
    $(this).attr('src', './assest/img/section3c.png');
  }, function () {
    $(this).attr('src', './assest/img/section3b.png');
  });

  $('.bottom_left_hover').hover(function () {
    $(this).attr('src', './assest/img/section3h.png');
  }, function () {
    $(this).attr('src', './assest/img/section3e.png');
  });

  $('.bottom_right_hover').hover(function () {
    $(this).attr('src', './assest/img/section3g.png');
  }, function () {
    $(this).attr('src', './assest/img/section3f.png');
  });

});