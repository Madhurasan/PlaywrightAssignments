/* Learn to identify and return pairs of indices whose elements sum up to a specific target using nested loops in
JavaScript. */

const nums = [2,4,7,8,11,14];
const target = 15;
let resultPair= [];

function findThePairsInArrayForGivenSum(arrayOfNum, targetSumValue){
    let pairOfResults = [];
    for(let i = arrayOfNum.length-1; i>=0; i--){
        for(let y=0; y<i; y++){
                if(arrayOfNum[i] + arrayOfNum[y] === targetSumValue){
                    pairOfResults = [arrayOfNum[i], arrayOfNum[y]];
                    // console.log(pairOfResults);
                    resultPair.push(pairOfResults);
                }
        }
    }
    console.log(resultPair);
}

findThePairsInArrayForGivenSum(nums, target);