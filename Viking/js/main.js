$(function(){

    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 1,
            showinfo : 0
        }
    });

    $('.hero__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.hero__slider-content',
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/left-arrow.png" alt="prev"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/right-arrow.png" alt="next"></button>'
      });
      $('.hero__slider-content').slick({
        asNavFor: '.hero__slider',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false
      });

});