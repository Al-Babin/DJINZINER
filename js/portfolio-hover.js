let frameMocup = document.querySelectorAll('.slide-frame__mockup');
let contentMocup = document.querySelectorAll('.slide-content__mockup');
let content = document.querySelectorAll('.slide-content');
let frame = document.querySelectorAll('.slide-frame');
let pageTitle = document.querySelectorAll('.portfolio-title'); 
let slideLabel = document.querySelectorAll('.slide-label'); 

for(let i = 0; i < frameMocup.length; i++) {
    frameMocup[i].addEventListener('mouseover', removeClass);
    contentMocup[i].addEventListener('mouseout', addClass);     
}


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

