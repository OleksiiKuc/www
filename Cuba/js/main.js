$(function(){

    $('.photo__slider').slick({
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/Arrow-left.svg" alt="prev"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/Arrow-right.svg" alt="next"></button>'
      });

    let nav = $('#menu');
    let header = $('#header');
    let headerH = header.height();
    let navH = nav.height();
    let scrollPos = $(window).scrollTop();

    $(window).scroll(function() {
      scrollPos = $(this).scrollTop();
      headerH = header.height();
      if(scrollPos > headerH) {
        nav.addClass('header_fixed');
        $('body').css({
          'paddingTop' : navH + 'px'  
        });
      } else {
        nav.removeClass('header_fixed');
        $('body').css({
          'paddingTop' : 0
        });
      }
      if(scrollPos > headerH) {
        navToggle.addClass('header_fixed');
        $('body').css({
          'paddingTop' : navH + 'px'  
        });
      } else {
        navToggle.removeClass('header_fixed');
        $('body').css({
          'paddingTop' : 0
        });
      }
    });

    let navToggle = $("#navToggle");

    /* Nav Toggle */
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });
});