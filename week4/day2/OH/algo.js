// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.


// Write function breaking records that takes in one array of scores Maria made throughout the season 
// create 2 vars for min score and max score 
// create count var which will be an array of 2 nums 
// write a loop to itterate over scores array
// if statement checking if the current score is > max score or < min score 
// if the score is higher than max, increase max count same for min count 
// also change max score and min score accordingly 
// return count 

function breakingRecords(scores){
    let minScore = scores[0]
    let maxScore = scores[0]
    let count = [0,0]
    for (let i = 1; i < scores.length; i++){
        if(scores[i] < minScore){
            count[1]++
            minScore = scores[i]
        }
        else if (scores[i] > maxScore){
            count[0]++
            maxScore = scores[i]
        }
    }
    return count
}
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]))




// Given a list of 'weak passwords' and a password (string) determine if the password is strong or weak 
// if the password is in the list of weak passwords return 'Weak password'
// if the password is not found in the list of weak passwords return 'Strong password'
let weakPass = ['12345678', 'password', 'secretPassword', 'strongPassword', 'youllNeverGuess']
let pass = 'asdf#$$GEG'
// let password2 = 'passwords'
// console.log(password === password2)


// write a function that takes in 2 parameters (weakpasswordlist, password)
// loop through the array of weakpasswords
// compare the password to each value in the array 
// if the password is found in the array return 'Weak password'
// otherwise return 'Strong password'

const strongOrWeakPassword = (weakPasswordList, password) => {
    for(let idx = 0; idx < weakPasswordList.length; idx++){
        // console.log('TYPE OF PASSWORD', typeof(password))
        // console.log('TYPE OF PASSWORD IN LIST',typeof(weakPasswordList[idx]))
        if(password == weakPasswordList[idx]){
            // console.log('Weak password')
            return 'Weak password'
        }
    }
    return 'Strong Password'
}
console.log(strongOrWeakPassword(weakPass,pass))


// Reverse an array 
// example reverseArr([1,2,3,4]) would return [4,3,2,1]

// first itteration [4]
// second itteration [4,3]
// third itteration [4,3,2]
// fourth itteration [4,3,2,1]


let result = [1,2,3]
result.pop()
console.log(result)
// Write a function that takes in an arr assume the values will all be numbers
// loop through the array from the end
// push the value into result 

























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


// if(result['h']){
//     // console.log('H is in the object');
//     result['h']++
// }else{
//     result['z'] = 1
// }




// let result = {}

// result['h'] = 1
// result['e'] = 1
// result['l'] = 2
// result['o'] = 1


// console.log(result);





















