// ! One huge difference is Global, block & function scoped! 
// ? What does this mean? 
// * var variables are function scoped which means they are only available within the function they are defined in 
// * When var variables are not defined within a function they are global scoped which means they are able to be accessed from anywhere
// var personOne = "Instructor Caden";



// console.log(personOne);

// if (personOne === "Instructor Caden"){
//     var personOne = "Bob Ross";
//     console.log('**************',personOne);
// }

// console.log(personOne);

let amysName = "Amy Williams";

console.log(amysName);


if (amysName == "Amy Williams"){
    let amysName = "Bob Ross";
    console.log("let inside block: "+amysName);
}
console.log(amysName);


// const luke = "Luke Skylwalker";

// luke = "Hans Solo";
// console.log(luke);




// * const variables. think constant they cannot change! you will get an error 🤯 however.... with data structures we can update things inside of the data structure
const person = {
    name: "Robert Smith",
    age: 32,
    isMusician: true,
}
person.age = 42
console.log(person.age);







// * Arrow functions
const sayHi = () => console.log("Hello from the arrow function");
sayHi();

const multiply = (a,b) => {return a*b}
console.log(multiply(12,2));

let switchState = false

const toggleSwitch = () => {
    if (switchState == false){
        switchState = true;
    }
    else{
        switchState = false
    }
    return switchState
}

// toggleSwitch(switchState);
switchState = toggleSwitch();
console.log(switchState);



// * Destructuring

let evenNums = [2,4,6,8,10];
// console.log(evenNums[1]);
let [num1, ...nums] = evenNums
console.log(num1, nums);

let names = ['Caden', 'Ben', 'Amy', 'Lindsey'];


const StudentMacy = {
    name:"Macy",
    role:"Student",
    age:25,
    favHobbies:["Playing games", "Coding", "Hiking"]
}
let {name:fName} = StudentMacy
console.log(fName);


