let buttonNext = document.querySelector('.portfolio__button--next');
let buttonPrev = document.querySelector('.portfolio__button--prev');
let slider = document.querySelector('.portfolio__list');
let slides = document.querySelectorAll('.slide');
let slide = document.querySelector('.slide');

buttonNext.addEventListener('click', nextSlide);
buttonPrev.addEventListener('click', prevSlide);

let count = 1;

//Get matrix of transform and get current value translateX
let matrix = getComputedStyle(slider).transform;
let matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')
let translationX =  Number(matrixValues[4]);

//Get width of slide and prepare it for a number
let slideWidth = Number(getComputedStyle(slide).width.replace('px', "").trimEnd());

// Functions of prev and next buttons
function nextSlide() {
    if(count < slides.length) {
        slider.style.transform = `translateX(${translationX - slideWidth}px)` ; 
        translationX = translationX - slideWidth;
        count ++;
        console.log(count);
        slider.dataset.currentSlide = count;
    } else return
} 

function prevSlide() {
    if(count > 1) {
        slider.style.transform = `translateX(${translationX + slideWidth}px)` ; 
        translationX = translationX + slideWidth;
        count --;
    } else {
        return 
    }
    console.log(count);
    slider.dataset.currentSlide = count;
}

