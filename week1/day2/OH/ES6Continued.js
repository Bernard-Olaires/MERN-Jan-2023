// * Destructuring arrays

let names = ['Alex', 'Lynn', 'Kristopher', 'Quach']

let [, ...copyOfNames] = names
copyOfNames.push('Ethan')
console.log(copyOfNames);
console.log(names);

let StudentMacy = {
    fName:"Macy",
    role:"Student",
    age:25,
    favHobbies:["Playing games", "Coding", "Hiking"]
}
StudentMacy = {...StudentMacy, role:'Instructor', city:'Seattle'}


let {fName, role, city} = StudentMacy
console.log(fName, role, city);
