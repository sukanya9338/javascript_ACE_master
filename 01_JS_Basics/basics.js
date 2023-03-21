/*
// console
console.log("This is a log statement");
console.info("This is an information statement");
console.warn("this is a warning statement");
console.error("this is a error statement");
*/

// variable declaration
let a = true;
console.log( typeof a);

// data types : string, number , boolean , undefined , null
let employeeName = "John";
console.log("Employee Name : " + employeeName + " type : " + typeof  employeeName);
console.log(`Employee Name : ${employeeName} type : ${typeof  employeeName}`);

// number
let employeeSalary = 75000;
console.log(`Employee Salary : ${employeeSalary} type : ${typeof  employeeSalary}`);

// boolean
let isManager = true;
console.log(`Is Manager : ${isManager} type : ${typeof  isManager}`);

// object
let employee = {
    name : "John",
    age : 35,
    designation : "Tech Lead",
    company : "HCL"
};
console.log(employee);
console.log(employee.name);

// array
let colors = ["white", "blue", "black"];
console.log(colors);
