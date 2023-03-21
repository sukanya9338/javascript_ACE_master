/*
    1. Arithmetic operators + - * /
    2. short hand math : += , -= , /= , *=
    3. incr / decr : ++ , --
    4. conditional Operators : < > <= >= !==
    5. ternary operators
    6. equality operators
 */

let num1 = 10;
let num2 = 20;
console.log(`Sum : ${num1 + num2}`);
console.log(`Sub : ${num1 - num2}`);
console.log(`Mul : ${num1 * num2}`);
console.log(`Div : ${num1 / num2}`);

//
let a = 10;
let sum = 20;
//sum = sum + a;
sum += a;
console.log(sum);

// conditional
let marks = 35;
let result = "";
if(marks < 35){
    result = "You failed the exam";
}
else{
    result = "You Cleared the exam";
}
console.log(result);

// ternary operator
// (condition) ? true : false;
(marks < 35) ? result = "Failed" : result = "Pass";
console.log(result);









