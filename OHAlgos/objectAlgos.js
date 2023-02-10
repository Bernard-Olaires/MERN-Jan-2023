// Itterate over an object
let obj = {a:1, b:2, c:'C'}
for (let key in obj){
    console.log('Key: ',key,'Value: ',obj[key])
}







let coordinate = {x:2, y:1}
// Check if x+y = 3
console.log('X', coordinate['x'])
console.log('Y', coordinate['y'])

// Adds together the values at the two keys, they happen to be numbers so the sum will = 3
//                       2                 1
// let sum = coordinate['x'] + coordinate['y']


// the code below will not work it will concatenate the 2 strings ('x', 'y') so it will look for a key of 'xy' in the coordinate object 
// let sum = coordinate['x' + 'y'] // ===> coordinate['xy']

console.log(sum)



let coordinates = [
    {x:1, y:2},
    {x:3, y:1},
    {x:4, y:6},
    {x:0, y:3},
]
// * Given the list of coordinates above determine if x+y = n 
// * return back a number of how many times x+y = n 


// Given a string return an object with the count of every character in the string 
// example charCount('hello') would return {h:1, e:1, l:2, o:1}
// * Write a function that takes a string as a param
// * we need an object that holds the count of each letter in the string to return 
// * write a for loop to loop through the string
// * if the letter we are on exists in the result we need to increase the value associated with that key by 1 
// * If it doesnt exist then we need to add it to result and set the value to one 
// ! {h:1, e:1, l:2, o:1}
function charCount(str){
    let result = {}
    for(let i = 0; i < str.length; i++){
        let char = str[i] 
        console.log('CHAR', char);
        if(result[char]){ 
            result[char] = result[char] + 1
        }else{
            result[char] = 1
        }
    }
    console.log(result);
}
charCount('hello')