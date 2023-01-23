const placeholders = document.querySelectorAll('.form-field__placeholder');
const inputs = document.querySelectorAll('.form-field__input');

for (let i = 0; i < inputs.length; i++) {
    inputs[i].onfocus = function() {
        placeholders[i].style.opacity = 0;  
    }

    inputs[i].onblur = function() {
        if(!inputs[i].value.trim()){
            inputs[i].value = "";
            placeholders[i].removeAttribute('style'); 
        }
    }
}

