let closingMenuTapingMenuItem = () => {
    console.log('Задержка');
    $('.page__body').removeClass('lock');
    $('.main-nav').removeClass('main-nav--opened');
    $('.main-nav').addClass('main-nav--closed');
}

let slideTo =  function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 400,   // по умолчанию «400» 
        easing: "swing" // по умолчанию «swing» 
    });
    
    closingMenuTapingMenuItem();

    return false;
}

$('.site-list__item a').on('click', slideTo);

$('.page-header__button').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 1000,   // по умолчанию «400» 
        easing: "swing" // по умолчанию «swing» 
    });

    return false;
});