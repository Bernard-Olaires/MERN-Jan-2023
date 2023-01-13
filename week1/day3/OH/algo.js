// 1)
// # You will be given an array and a value. you need to check whether the provided array contains the value.
// # Array can contain numbers or strings. X can be either.
// # Return true if the array contains the value, false if not.

// * write a function that has 2 parameters (arr, val)
// * loop through the arr if statement checking if the value is present 
// * if we find the val return true 
// * (else) return false if its not found 
const checkArr = (arr, val) => {
    for (let idx = 0; idx < arr.length; idx++){
        if (arr[idx] === val){
            return true
        }
    }
    return false
}
console.log(checkArr([1,2,3,4,5], '5'));











// 2)
// # Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// arr = [1, 2, 3, 4]
// # => 1 * 2 * 3 * 4 = 24
// * write a function that takes in an array
// * make a variable to store the sum it should start as the first number in the arr 
// * loop through the array starting at idx 1 
// * multiply sum by the value we are currently on in the array 

const multiplyArr = (arr) => {
    let sum = arr[0]
    for (let idx = 1; idx < arr.length; idx++) {
        sum *= arr[idx]
        // sum = sum * arr[idx]
    }
    return sum
}
console.log(multiplyArr([1, 2, 3, 4]));




// 3)
// # Build a function that returns an array of integers from n to 1 where n>0.
// # Example : n=5 --> [5,4,3,2,1]




// # 4)
// # Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b. 






// #5) Build a function that returns an array of any given array in reverse.
// Bonus challenge, reverse an array without creating a new array

