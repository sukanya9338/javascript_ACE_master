/*
    1. if-else
    2. for
    3. switch
    4. while
    5. do-while
 */

let currentTime = -190;
let message = "";
if(currentTime >= 0 && currentTime <= 12){
    message = "Good Morning";
}
else if(currentTime > 12 && currentTime <= 17){
    message = "Good Afternoon";
}
else if(currentTime > 17 && currentTime <= 23){
    message = "Good Evening";
}
else{
    message = "Invalid Time";
}
console.log(message);

// for-loop
// 0 - 10
let result = "";
for(let i=0; i<=10; i++){
    if(i <= 9){
        result += ` ${i} , `;
    }
    else{
        result += ` ${i} `;
    }
}
console.log(result);

// print 20 - 0 with diff 2
result = "";
for(let i=20; i >= 0; i -= 2){
    result += `${i} `;
}
console.log(result);

/*
    *
    * *
    * * *
    * * * *
    * * * * *
 */
let number = 5;
result = "";
for(let i=1; i<=number; i++){
   for(let j=1; j<= i; j++){
       result += ' * ';
   }
   result += '\n\n';
}
console.log(result);

/*
    1
    12
    123
    1234
    12345
 */

/*
    1
    22
    333
    4444
    55555
 */

/*
    12345
    123
    12
    1
 */

/*
    55555
    4444
    333
    22
    1
 */

/*
    54321
    5432
    543
    54
    5
 */

















