let $item = $('.contacts-bg');

$(window).scroll(function () {
    let scroll = $(window).scrollTop() + $(window).height();
    let offset =$item.offset().top;
    if (scroll > offset) {
        $item.addClass('contacts-bg--scroll');
    } else {
        $item.removeClass('contacts-bg--scroll');
    }
});