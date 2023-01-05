let frameMocup = document.querySelectorAll('.slide-frame__mockup');
let contentMocup = document.querySelectorAll('.slide-content__mockup');
let content = document.querySelectorAll('.slide-content');
let frame = document.querySelectorAll('.slide-frame');
let pageTitle = document.querySelector('.portfolio-title'); 
let slideLabel = document.querySelectorAll('.slide-label'); 

//adding listeners on all slides
for(let i = 0; i < frameMocup.length; i++) {
    frameMocup[i].addEventListener('mouseover', removeClass);
    contentMocup[i].addEventListener('mouseout', addClass);     
}

function removeClass() {
    for(let i = 0; i < frameMocup.length; i++) {
        content[i].classList.remove('visually-hidden');
        frame[i].classList.add ('visually-hidden');
        slideLabel[i].classList.add ('slide-label--onhover');
    }    
    pageTitle.classList.add ('visually-hidden'); 
}

function addClass() {
    for(let i = 0; i < frameMocup.length; i++) {
        content[i].classList.add('visually-hidden');
        frame[i].classList.remove ('visually-hidden');
        slideLabel[i].classList.remove ('slide-label--onhover');
    }
    pageTitle.classList.remove ('visually-hidden');
}

