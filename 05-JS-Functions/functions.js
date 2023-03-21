// normal function
function greet(name){
    console.log(`Iam from Greet ${name.toUpperCase()}`);
}
greet("Naveen");

// function expression
let greetFE = function(name){
    console.log(`Iam from Greet ${name.toUpperCase()}`);
};
greetFE("Naveen");

// arrow function
let greetAF = (name) => {
    console.log(`Iam from Greet ${name.toUpperCase()}`);
};
greetAF("Naveen");

// function with return value
let sum = (a , b) => {
    let result = a + b;
    return result;
};
let theSum = sum(10,20);
console.log(theSum);

// print the numbers
let printNumbers = (startNumber, endNumber, incrNumber) => {
    let result = "";
    if(startNumber <= endNumber){
        for(let i=startNumber; i<=endNumber; i += incrNumber){
            result += ` ${i} `;
        }
        console.log(result);
    }
    else{
        console.log('start number should be less than end number');
    }
};
printNumbers(10,1000, 10);

/*
    1
    12
    123
    1234
    12345
 */

let printStringOne = (value) => {
    let result = "";
    for(let i=1; i<=value; i++){
        for(let j=1; j<=i; j++){
            result += `${j}`;
        }
        result += `\n`;
    }
    console.log(result);
};
printStringOne(5);
