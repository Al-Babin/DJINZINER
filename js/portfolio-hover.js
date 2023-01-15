let frameMocup = document.querySelectorAll('.slide-frame__mockup');
let slideContentWrapper = document.querySelectorAll('.slide-content__wrapper');
let content = document.querySelectorAll('.slide-content');
let frame = document.querySelectorAll('.slide-frame');
let pageTitle = document.querySelector('.portfolio-title'); 
let slideLabel = document.querySelectorAll('.slide-label'); 
let slideCollection = document.querySelectorAll('.slide'); 
let arrowButtons = document.querySelectorAll('.arrow-button');
let buttonMovingParts = document.querySelectorAll('.button-moving-part--portfolio');
let slideButtons = document.querySelectorAll('.slide__button');

//adding listeners on all slides
for(let i = 0; i < frameMocup.length; i++) {
    frameMocup[i].addEventListener('mouseenter', removeClass);
    slideContentWrapper[i].addEventListener('mouseleave', addClass);     
}

function removeClass() {
    for(let i = 0; i < frameMocup.length; i++) {
        content[i].classList.remove('visually-hidden');
        frame[i].classList.add ('visually-hidden');
        slideLabel[i].classList.add ('slide-label--onhover');
    }
    changeLabelColors();   
    changeButtonColors();
    pageTitle.classList.add ('visually-hidden'); 
}

function addClass() {
    for(let i = 0; i < frameMocup.length; i++) {
        content[i].classList.add('visually-hidden');
        frame[i].classList.remove ('visually-hidden');
        slideLabel[i].classList.remove ('slide-label--onhover');
    }
    changeLabelColors(true)
    changeButtonColors(true);
    pageTitle.classList.remove ('visually-hidden');
}

//Changing color of label. Get colors from layout and set to current label
function changeLabelColors(isDeleted = false) {
    if(isDeleted) {
        for(let item of slideLabel) {
            item.removeAttribute('style');
        } 
    } else {
        for(let item of slideLabel) {
            let colorLabel = item.dataset.labelColor;
            item.style.color = colorLabel;
        } 
    }
}

//Changing color of buttons.Get number of current slide and get the colors from layout for this slide
//Then set this colors to buttons
function changeButtonColors(isDeleted = false) {
    let currentSlide = document.querySelector('.portfolio__list').dataset.currentSlide - 1;
    if(isDeleted) {
        for(let button of arrowButtons) {
            button.removeAttribute('style');
        }
        for(let slideButton of slideButtons) {
            slideButton.removeAttribute('style');
        }
    } else {
        let colorOutFirst = slideCollection[currentSlide].dataset.buttonsColoroutFirst;
        let colorOutSecond = slideCollection[currentSlide].dataset.buttonsColoroutSecond;
        let colorInFirst = slideCollection[currentSlide].dataset.buttonsColorinFirst;
        let colorInSecond = slideCollection[currentSlide].dataset.buttonsColorinSecond;
        for(let button of arrowButtons) {
            button.style.background = `linear-gradient(92.05deg, ${colorOutFirst} 0%, ${colorOutSecond} 99.29%)`;
            button.style.setProperty('--arrow-button-before-background', `linear-gradient(92.05deg, ${colorInFirst} 0%, ${colorInSecond} 99.29%)`);
        }
        for(let buttonMovingPart of buttonMovingParts) {
            buttonMovingPart.style.background = `linear-gradient(92.05deg, ${colorInFirst} 0%, ${colorInSecond} 99.29%)`;
        }
        for(let slideButton of slideButtons) {
            slideButton.style.setProperty('--button-moving-part-before-background', `linear-gradient(92.05deg, ${colorOutFirst} 0%, ${colorOutSecond} 99.29%)`)
        }
    }
}

