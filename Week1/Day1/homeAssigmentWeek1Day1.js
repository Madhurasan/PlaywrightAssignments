/* Understand global scope, function scope, and block scope by using var and let inside
conditional blocks. */

// Global scope variable
let genderType = "Female";

function printGender(){
    let color = "brown";

    if(genderType.startsWith("Female")){
        var age = 30;
        let color = "pink";
        console.log("Color from If block: "+color);
    }

    console.log("Value of Age leaked from if block scope: "+age);//Var leakage verification
    console.log("color from Function Block: "+color); //Scope works fine for let and color will take value based on the scope
}

printGender();
console.log("Global variable: "+genderType); //to print the Global variable and check the if condition works fine on change