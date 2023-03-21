let selectElement = document.querySelector('#lang-select');
let h2Element = document.querySelector('#lang-option');

selectElement.addEventListener('change', () => {
    let selectedOption = selectElement.value;
    h2Element.textContent = selectedOption;
})