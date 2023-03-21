let inputElement = document.querySelector('#req-number');
let rangeElement = document.querySelector('#multiplier');
let mathNumberElement = document.querySelector('#number');
let multiplyNumberElement = document.querySelector('#multi');
let resultElement = document.querySelector('#result');

// keyup event
inputElement.addEventListener('keyup', () => {
    let textEntered = inputElement.value;
    if(textEntered !== ""){
        mathNumberElement.textContent = textEntered;
    }
    else{
        mathNumberElement.textContent = "1";
    }
    calculate();
});

// input event
rangeElement.addEventListener('input', () => {
    let rangeValue = rangeElement.value;
    multiplyNumberElement.textContent = rangeValue;
    calculate();
});

// calculate
let calculate = () => {
    let mathNumber = Number(mathNumberElement.textContent);
    let multiplier = Number(multiplyNumberElement.textContent);
    resultElement.textContent = String(mathNumber * multiplier);

};