/* Learn how to manipulate strings and use looping statements in a programming language to solve practical
problems. */

let inputString = "This is  Sparta my  Boy";

function findLengthOfLastWord(input){
    let lastword = input.substring(input.trimEnd().lastIndexOf(" ")+1);
    console.log(`The length of the last word \"${lastword}\" of the given Sentence \"${input}\" is ${lastword.length}`);
}

findLengthOfLastWord(inputString);

let inputString1 = "A gentleman ";
let inputString2 = "Elegant Man";

function isAnagram(firstWord, secondWord){
   if(firstWord.trim().replace(" ", "").length === secondWord.trim().replace(" ", "").length){
    let sortedFirstWord = sortWordInAscendingOrder(firstWord);
    let sortedSecondWord = sortWordInAscendingOrder(secondWord);
    if(sortedFirstWord === sortedSecondWord){
        console.log(`The Given words \"${firstWord}\" and \"${secondWord}\" are Anagrams`);
    }else{
       console.log(`The Given words \"${firstWord}\" and \"${secondWord}\" are not anagrams`); 
    }
   }else{
    console.log(`The Given words \"${firstWord}\" and \"${secondWord}\" are not anagrams`);
    
   }
}

function sortWordInAscendingOrder(wordToBeSorted){
    let sortedword="";
    let lowerCasedWord = wordToBeSorted.trim().replace(" ", "").toLowerCase();
    console.log(lowerCasedWord);
    let arrayOfLetters = lowerCasedWord.split("");
    console.log(arrayOfLetters);

    for(let i=0; i<arrayOfLetters.length; i++){
        for(let j =0; j<arrayOfLetters.length-1-i; j++){
            if(arrayOfLetters[j] > arrayOfLetters[j+1]){
                let temp = arrayOfLetters[j];
                arrayOfLetters[j] = arrayOfLetters[j+1];
                arrayOfLetters[j+1] = temp;
            }
        }
    }
    for(let z=0; z<arrayOfLetters.length; z++){
        sortedword = sortedword.concat(arrayOfLetters[z]);
    }
console.log(`The sorted Word is: ${sortedword}`);
return sortedword;
}

isAnagram(inputString1, inputString2);