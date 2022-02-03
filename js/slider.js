$(document).ready(function () {

   $('.twitter').slick({
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      speed: 900,
      easing: 'ease-in',
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,

      draggable: true,/*mouse swipe dlia pk*/
      swipe: true,
      touchThreshold: 5,
   });

});

function ibg() {

   $.each($('.ibg'), function (index, val) {
      if ($(this).find('img').length > 0) {
         $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
      }
   });
}

ibg();


$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body, html').toggleClass('lock');
   });
});
$(document).ready(function () {
   $('.header__link').click(function (event) {
      $('body, html').removeClass('lock');
       $('.header__burger, .header__menu').removeClass('active');
   });
});

$(document).ready(function () {
   $('.rectangle__firsthalf').on("touchstart", function () {
      $('.rectangle__firsthalf').addClass('Myhover');
   });
});
$(document).ready(function () {
   $('.rectangle__firsthalf').on("touchend", function () {
      $('.rectangle__firsthalf').removeClass('Myhover');
   });
});

$(document).ready(function () {
   $('.rectangle1__secondhalf').on("touchstart", function () {
      $('.rectangle1__secondhalf').addClass('Myhover1');
   });
});
$(document).ready(function () {
   $('.rectangle1__secondhalf').on("touchend", function () {
      $('.rectangle1__secondhalf').removeClass('Myhover1');
   });
});
$(document).ready(function () {
   $('.bicycles__firsthalf').on("touchstart", function () {
      $('.bicycles__firsthalf').addClass('Myhover2');
   });
});
$(document).ready(function () {
   $('.bicycles__firsthalf').on("touchend", function () {
      $('.bicycles__firsthalf').removeClass('Myhover2');
   });
});
$(document).ready(function () {
   $('.album__tcolumn__frow').on("touchstart", function () {
      $('.album__tcolumn__frow').addClass('Myhover3');
   });
});
$(document).ready(function () {
   $('.album__tcolumn__frow').on("touchend", function () {
      $('.album__tcolumn__frow').removeClass('Myhover3');
   });
});

$(document).ready(function () {
   $('.shopbtn').on("touchstart", function () {
      $('.shopbtn').addClass('Myhover4');
   });
});
$(document).ready(function () {
   $('.shopbtn').on("touchend", function () {
      $('.shopbtn').removeClass('Myhover4');
   });
});

$(document).ready(function () {
   $('.prefooter__btn').on("touchstart", function () {
      $('.prefooter__btn').addClass('Myhover5');
   });
});
$(document).ready(function () {
   $('.prefooter__btn').on("touchend", function () {
      $('.prefooter__btn').removeClass('Myhover5');
   });
});
