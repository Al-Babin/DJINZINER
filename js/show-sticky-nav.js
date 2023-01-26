const nav = document.querySelector('.nav');
const benefits = document.querySelector('.benefits');
const benefitsOffsetTop = benefits.offsetTop;

window.onscroll = function() {
    showStickyNav();
};

function showStickyNav(callback) {
    if(window.pageYOffset >= benefitsOffsetTop) {
        nav.classList.add('sticky-nav');
    } else {
        nav.classList.remove('sticky-nav'); 
    }
}



