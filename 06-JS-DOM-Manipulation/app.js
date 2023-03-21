// access the html
console.log(document);

// title
console.log(document.title);
document.title = "ACE Engineering";

// head
console.log(document.head); // <head>
console.log(document.body); // <body>

// h2 element
let h2Element = document.querySelector("h2");
console.log(h2Element);
console.log(h2Element.textContent);

// change the content
h2Element.textContent = "Good Morning ACE";


// change the styles
/**/

let applyStyles = () => {
    h2Element.style.backgroundColor = "lightgreen";
    h2Element.style.textAlign = "center";
    h2Element.style.padding = "20px";
    h2Element.style.fontFamily = "Arial, sans-serif";
};

let buttonElement = document.querySelector('#btn');
buttonElement.addEventListener('click', applyStyles);











