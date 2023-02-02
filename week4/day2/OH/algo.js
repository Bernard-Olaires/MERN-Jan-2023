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
