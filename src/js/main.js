$('.hamRotate').on('click',function () {
    $('.nav-overlay-left').toggleClass('active');
    $('.nav-overlay-right').toggleClass('active');
    $('.hamRotate').toggleClass('active');
    $('.line').toggleClass('active');
    $('main').toggleClass('active');
    $('.burger').toggleClass('active');
});

$('.address').on('click',function () {
    $('.map').toggleClass('active');
    $('main').toggleClass('active');
    $('header').toggleClass('active');
    $('footer').toggleClass('active');
});

$('.js-close-map').on('click',function () {
    $('.map').removeClass('active');
    $('main').removeClass('active');
    $('header').removeClass('active');
    $('footer').removeClass('active');
});
