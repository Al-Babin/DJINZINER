let frameMocup = document.querySelector('.slide-frame__mockup');
let contentMocup = document.querySelector('.slide-content__mockup');
let content = document.querySelector('.slide-content');
let frame = document.querySelector('.slide-frame');
let pageTitle = document.querySelector('.portfolio-title'); 
let slideLabel = document.querySelector('.slide-label'); 

frameMocup.addEventListener('mouseover', removeClass);
contentMocup.addEventListener('mouseout', addClass);

function removeClass() {
    content.classList.remove('visually-hidden');
    frame.classList.add ('visually-hidden');
    pageTitle.classList.add ('visually-hidden');
    slideLabel.classList.add ('slide-label--onhover');
}

function addClass() {
    content.classList.add('visually-hidden');
    frame.classList.remove ('visually-hidden');
    pageTitle.classList.remove ('visually-hidden');
    slideLabel.classList.remove ('slide-label--onhover');
}

