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
let duration = 'fast';
//adding listeners on all slides
for(let i = 0; i < frameMocup.length; i++) {
    frameMocup[i].addEventListener('mouseenter', removeClass);
    slideContentWrapper[i].addEventListener('mouseleave', addClass);     
}

function removeClass() {
        let i = slider.dataset.currentSlide - 1;
        $(pageTitle).animate({ left: "-50%", opacity: "0"}, 1200, function() {
        });
        $(slideLabel[i]).animate({ opacity: "0"}, 100, function() {
            slideLabel[i].classList.add ('slide-label--onhover');
            changeLabelColors(); 
            $(slideLabel[i])
            .animate({ left: "60%"})
            .animate({ left: "50%", opacity: "1"}, 800);
        });
        for(let button of arrowButtons){
            $(button).animate({ opacity: "0"}, 200, function() {
                changeButtonColors();
                $(button).animate({ opacity: "1"}, 300);
            });
        }

        $(frame[i]).animate({ opacity: "0"}, 1200, function() {
            frame[i].classList.add ('visually-hidden');
        });
}

function addClass() {
        let i = slider.dataset.currentSlide - 1;
        //inverted
        frame[i].classList.remove('visually-hidden');

        $(frame[i]).animate({ opacity: "1"}, 400);
        $(pageTitle).animate({ left: "0",opacity: "1"}, 400);

        for(let button of arrowButtons){
            $(button).animate({ opacity: "0.4"}, 200, function() {
                changeButtonColors(true);
                $(button).animate({ opacity: "1"}, 400);
            });
        }

        $(slideLabel[i]).animate({ opacity: "0"}, 100, function() {
            slideLabel[i].classList.remove ('slide-label--onhover');
            changeLabelColors(true); 
            $(slideLabel[i])
            .animate({ opacity: "1"}, 600);
        });
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

