let checkBoxElement = document.querySelector('#checkbox');
let passwordElement = document.querySelector('#password');

checkBoxElement.addEventListener('change', () => {
    if(checkBoxElement.checked){
        passwordElement.setAttribute("type", "text");
    }
    else{
        passwordElement.setAttribute("type", "password");
    }
});