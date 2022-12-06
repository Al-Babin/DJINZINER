let pageBody = document.querySelector('.page__body');
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
navToggle.addEventListener('click', function() {
    
    navMain.classList.remove('main-nav--nojs');

    if(navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
        pageBody.classList.add('lock');  
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
        pageBody.classList.remove('lock');
    }
})