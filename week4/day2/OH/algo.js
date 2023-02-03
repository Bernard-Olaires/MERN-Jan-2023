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




// Given a string return an object with the count of every character in the string 
// example charCount('hello') would return {h:1, e:1, l:2, o:1}
// * Write a function that takes a string as a param
// * we need an object that holds the count of each letter in the string to return 
// * write a for loop to loop through the string
// * if the letter we are on exists in the result we need to increase the value associated with that key by 1 
// * If it doesnt exist then we need to add it to result and set the value to one 
// ! {h:1, e:1, l:2, o:1}
function charCount(str){
    let result = {} // {h:1, e:1, l:2, o:1}
    for(let i = 0; i < str.length; i++){
        let char = str[i] // o
        console.log('CHAR', char);
        if(result[char]){ //result[o]
            result[char] = result[char] + 1
        }else{
            result[char] = 1 // result[o] = 1
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





















// Reverse an array 
// example reverseArr([1,2,3,4]) would return [4,3,2,1]