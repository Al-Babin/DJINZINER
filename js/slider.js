$(document).ready( function() {
    $('.slider').slick({
        dots:false,
        arrows: false,
        mobileFirst: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '100px',
                  slidesToShow: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '180px',
                  slidesToShow: 1,
                }
            },
            {
                breakpoint: 1920,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '360px',
                  slidesToShow: 1,
                }
            }
        ]
    });
});

$(document).ready( function() {
    $('.benefits__list').slick({
        arrows: false,
        dots: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 767,
                settings: "unslick"
            }
        ]
    });
});