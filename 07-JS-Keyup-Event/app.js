let inputElement = document.querySelector('#username');
let h2Element = document.querySelector('#msg');

inputElement.addEventListener('keyup', () => {
    let textEntered = inputElement.value;
    h2Element.textContent = textEntered;
});