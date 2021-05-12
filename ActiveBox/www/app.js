$(function () {

    /* Fixed header */
    let header = $("#header"); /* let - обявити перемінну. В "" як би поставили
                                  .header - шукали би по класу, а зараз по ID */
    let intro = $("#intro");
    let introH = intro.height(); /* height - Для висоти блоку інтро */
    let scrollPos = $(window).scrollTop(); /* Для визначення висоти при склорі */

    $(window).on("scroll resize", function() {
        scrollPos = $(this).scrollTop();
        introH = intro.height();

        if(scrollPos > introH) {
            header.addClass("fixed"); /* Добавлення класу для шапки, щоб вона була фіксована */
        } else {
            header.removeClass("fixed");
        }

    });


    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementID = $(this).data('scroll'); /* $ - селектор */
        let elementOffset = $(elementID).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70 /* -70, для того щоб на 70 пікселів менше скролило*/
        }, 700); /* 700 - скільки мілісекунд буде йти скрол*/
    });

    let nav = $("#nav");
    let navToggle = $("#navToggle");

    /* Nav Toggle */
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    /* Reviews: https://kenwheeler.github.io/slick/ */
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
});