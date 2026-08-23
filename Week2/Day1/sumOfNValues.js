/* Learn to implement a function in JavaScript that calculates and prints the cumulative sum of numbers from 1
to a given `n`.
 */

let n = 10;
let sum = 0

sumOfGivenValues(n);

function sumOfGivenValues(limit){
    for (let i =1; i<=limit; i++){
        sum = sum+i;
    }
    console.log(`The sum of numbers from 1 to ${n} is: ${sum}`);
}