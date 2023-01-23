const priceButton = document.querySelector('.price-button');
const form = document.querySelector('.form');
const feedbackFormBlock = document.querySelector('.feedback-form');
const feedbackFormBg = document.querySelector('.feedback-form__bg');


priceButton.addEventListener('click', showForm);
feedbackFormBlock.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(form); 
    if ( ! withinBoundaries ) {
        hideForm();
        setTimeout(() => {
            feedbackFormBlock.classList.add('visually-hidden')
        }, 600);
    }
});

document.addEventListener('keydown', function(e) {
	if( e.code == "Escape" ){ // код клавиши Escape, но можно использовать e.key
        hideForm();
        setTimeout(() => {
            feedbackFormBlock.classList.add('visually-hidden')
        }, 600);
	}
});

function showForm () {
    feedbackFormBlock.classList.remove('visually-hidden');
    form.classList.remove('form-hidden');
    feedbackFormBg.style.opacity = '1';
}

function hideForm() {
    feedbackFormBg.removeAttribute('style');
    form.classList.add('form-hidden');
}