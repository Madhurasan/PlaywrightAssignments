/* To create a function which checks if given input is odd or even */
// declare a variable
let number = 99;

function isOddOrEven(num){
    if(num < 0){
        console.log("Give a Valid input, the given input "+num+" is not a valid Positive number");
    } else if(num %2 === 0){
        console.log("The Given Number: "+num+" is an Even Number");
    }else{
        console.log("The Given Number: "+num+" is an Odd Number");
    }
}

isOddOrEven(number);