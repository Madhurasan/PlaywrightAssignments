/* Learning Objective:
Learn to categorize a number as positive, negative, or zero using conditional statements in JavaScript. */

//initialize a variable
let number = 90;

function printNumberType(num){
    switch(true){
        case num>0:
            console.log("The given Number "+num+" is a positive Number");
            break;
        case num < 0:
            console.log("The Given Number "+num+" is a Negative number");
            break;
        case num === 0 :
            console.log("The Given Number "+num+" is a Neutral number");
            break;
        default :
            console.log("The given Number "+num+" is not a valid number");
    }
}

printNumberType(number);