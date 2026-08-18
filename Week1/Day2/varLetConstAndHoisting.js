/* Classroom Assignment: var vs let vs const Learning
Objective:
Learn var vs let vs const and understand variable scoping
Expected Completion Time:
Best Case: 15 minutes
Average Case: 20 minutes
Assignment Details:
Declare a global variable and shadow it inside a function using both `var` and `let` to see how they behave
differently when printed.
Assignment Requirements:
1. Declare a const name as browserName (global)
2. Assign value as Chrome
3. Create a function by name getBrowserName
4. Create if condition inside function to check if browser is chrome, then
5. Declare a local variable (browserName) and print that variable inside function (outside block)
6. Call that function from the javascript
Hints to Solve:
- Use 'var' first as block variable and then convert that as 'let'
- Confirm how it works
Expected Outcome:
Upon completion, you should be able to:
- Understand the concepts of var, let and const and the hoisting principles */

const browserName = `Chrome`;

function printBrowserName(bName){

    if(bName === `Chrome`){
        var browserName = 'Firefox';
        //  let browserName = "Edge";
         console.log("The Browser Name inside the If block is: "+browserName);
    }
    console.log("BrowserName Outside the If block but inside the Function: "+browserName);
}

printBrowserName(browserName);

/* Understanding: 
    The Gloable Variable - "browserName" and the block variable defined as var - "browserName" (both having same name),
    the gloable variable is over ridden by block variable when the block variable is defined as "var",
    where as when the block variable definition is changed to let, it is working as expected only global variable gets printed.
 */