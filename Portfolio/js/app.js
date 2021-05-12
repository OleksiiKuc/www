
$(function() {

// Filter
// --------------------------
    let filter = $("[data-filter]"); // для відслідкування кліку по атрибуту data-filter

    filter.on("click", function(event) {
        event.preventDefault(); // Забирає стандартне поводження силки, тобто # іт.д не буде працювати на ній
        let cat = $(this).data('filter'); // при кліці бере атрибут з силки(data-filter) і записує його в переміну

        if (cat == 'all') {
            $("[data-cat]").removeClass('hide'); // якщо в нас категорія all, то забираємо класс hide
        } else {
            $("[data-cat]").each(function() {

            let workCat = $(this).data('cat');// проходимось по всім елементам і записуємо атрибут з data-cat в переміну, потім коли ми клікаємо, в нас в цю перемінну записується атрибут, на який ми клікнули, в іфі він перевіряється на збіжність з атрибутами, які прописані в html, якщо збіжності немає, то добавляється класс

            if (workCat != cat) {
                $(this).addClass('hide');
            } else {
                $(this).removeClass('hide');
            }
        }); // each - Проходимось по всім елементам, в яких є data-cat атрибут
        }
    }); // Коли ми клікаємо


// Modal
// --------------------------
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this); // Сохраняє значення дата атрибута, на який ми клікаємо. Тобто ми в цю кнопку сохраняємо дата атрибут або кнопки hire me або кнопки see my resume
        let modalId = $this.data('modal'); // шукаємо ід класу modal

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
                transform: "rotateX(0)"
            });
        }, 200);

        $('#worksSlider').slick('setPosition');
    });

    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this); // Сохраняє значення дата атрибута, на який ми клікаємо. Тобто ми в цю кнопку сохраняємо дата атрибут або кнопки hire me або кнопки see my resume
        let modalParent = $this.parents('.modal'); // знаходить батьківський класс modal. Тобто коли ми клієкамо по кнопці, воно шукає, в якому саме батьківському класі знахолиться кнопка.

        modalParent.find(".modal__dialog").css({
                transform: "rotateX(90deg)"
            });

        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 400);
    });

    $(".modal").on("click", function(event) {
        let $this = $(this);

        $(this).find(".modal__dialog").css({
                transform: "rotateX(90deg)"
            });

       setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 400);
    }); // Потрібно, щоб модальне вікно закривалось, якщо клікнути поза ним

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation(); // Якщо ми клікаємо по елементу moda__dialog, то ми відміняємо клік по його батьківському класі
    });



// Slider: https://kenwheeler.github.io/slick/
// --------------------------
    $('[data-slider="slick"]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
    });

    $(".slickPrev").on("click", function(event) {
        event.preventDefault();

        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

        currentSlider.slick("slickPrev");
    });

    $(".slickNext").on("click", function(event) {
        event.preventDefault();

        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

        currentSlider.slick("slickNext");
    });
});


