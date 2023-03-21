let technologies = ["HTML", "CSS", "JavaScript", "React"];
console.log(technologies);
console.log(technologies[0]);

let employees = [
    {
        id : "A01",
        name : "Rajan",
        age : 25,
        designation : "Software Engineer"
    },
    {
        id : "A02",
        name : "Mahesh",
        age : 30,
        designation : "Sr.Software Engineer"
    },
    {
        id : "A03",
        name : "Laura",
        age : 35,
        designation : "Tech Lead"
    },
    {
        id : "A04",
        name : "John",
        age : 45,
        designation : "Manager"
    }
];
console.log(employees);
console.log(employees[0]);
//console.log(employees[0].name); // Rajan

// loop an array
let result = "";
for(let i =0; i<employees.length; i++){
    result += ` ${employees[i].name} `
}
console.log(result);

// filter based on age using normal-for loop
let juniorEmployees = [];
for(let i=0; i<employees.length; i++){
    if(employees[i].age <= 30){
        juniorEmployees.push(employees[i].name);
    }
}
console.log(juniorEmployees);

// filter based on age using for-in loop
juniorEmployees = [];
for(let index in employees){
    if(employees[index].age <= 30){
        juniorEmployees.push(employees[index].name);
    }
}
console.log(juniorEmployees);

// filter based on age using for-of loop
juniorEmployees = [];
for(let employee of employees){
    if(employee.age <= 30){
        juniorEmployees.push(employee.name);
    }
}
console.log(juniorEmployees);

// filter based on age using filter function
juniorEmployees = [];
employees.filter(function (employee){
    if(employee.age <= 30){
        juniorEmployees.push(employee.name);
    }
});
console.log(juniorEmployees);

// filter based on age using filter with arrow function
juniorEmployees = [];
employees.filter( (employee) => {
    if(employee.age <= 30){
        juniorEmployees.push(employee.name);
    }
});
console.log(juniorEmployees);

// arrays -> filter(), map(), reduce