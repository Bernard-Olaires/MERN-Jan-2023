
// * Review of data types 

// * String
var myName = "Caden";

// * Number 
var age = 25

// * decimals are still numbers in JS
var pi = 3.14;


var isHuman = false;


// * These two if statements below show the difference between == and === 
// * === means its checking the value AND the data type == just checks the value ignores the datatype
if (pi == '3.14'){
    console.log("True");
}

if (pi === '3.14'){
    console.log("True");
}else{
    console.log("False");
}


// * Data Structures
//              0 1 2 3 4
var evenNums = [2,4,6,8,10];
console.log(evenNums[1]);

var myArray2 = ['Caden', 'Ben', 'Amy', 'Lindsey'];

var StudentMacy = {
    name:"Macy",
    role:"Student",
    age:25,
    favHobbies:["Playing games", "Coding", "Hiking"]
}
console.log(StudentMacy.name);

var employeeAshton = 
{
    name: "Ashton",
    role:"Instructor",
    age:42,
    isHuman:true,
    favHobbies:['Learning new technologies', 'Playing with the dogs', 'Playing volleyball'],
    lectureSchedule:{
        week1:{
            day1:"HTML",
            day2:"CSS",
            day3:"Flex-box",
        },
        week2:{
            day1:"JS intro",
            day2:"JS on the browser",
            day3:"belt prep demo",
        },
        week3:{
            day1:"Terminal, JS arrays and objects",
            day2:"Github",
            day3:"API's",
        },
    }
}
console.log(employeeAshton.favHobbies[1]);
console.log(employeeAshton.lectureSchedule.week1.day1);


// * if, else (conditional)

var myAge = 17;
if(myAge >= 18){
    console.log('You are old enough welcome in to the club');
}
else{
    console.log('Sorry you must be 18 or older to enter the club');
}

var highSchoolGrad = true;

if (highSchoolGrad){
    console.log('You can enroll in this bootcamp');
}
else{
    console.log('Sorry you must graduate high school or receive your GED first');
}

var weekday = "Friday"

if (weekday == "Friday"){
    console.log("Woohoo its the weekend!");
}else if(weekday == "Saturday"){
    console.log("One more day to relax!");
}else{
    console.log("Time to work!");
}

// * for loop syntax 
for (var i = 0; i <= 10; i++){
    console.log(i)
}
// ! what will the output be?




// * looping through an array 
for (var index = 0; index < evenNums.length; index++) {
    console.log(evenNums[index]); 
}



// * function syntax


const sayHi= () => {  
    console.log("Hello World!");
}
sayHi()
const sayHello = () => {
    console.log('Hello');
}
sayHello()



const multiply = (num1, num2) => {
    // ! explain to me the difference between return and console.log
    return num1 * num2
}
let multiplyResult = multiply(2,4);
console.log(multiplyResult);

