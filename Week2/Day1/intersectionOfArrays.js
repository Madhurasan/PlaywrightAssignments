/* Understand and apply basic programming constructs in TypeScript to compute the intersection of
two arrays. */

let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [3, 4, 6, 7, 8, 3];
let intersectionArray= [];

function intersectionOfArrays(firstArray, secondArray){
    for(let i=0; i<firstArray.length; i++){
        for(let j=0; j<secondArray.length; j++){
            if(firstArray[i] === secondArray[j]){
                if(intersectionArray.includes(firstArray[i])){
                }else{
                    intersectionArray.push(firstArray[i]);
                }
            }
        }
    }

    console.log(`Intersectoion of given arrays are provided below: \n`,array1," intersects ",array2," Produces: \n",intersectionArray);
}

intersectionOfArrays(array1, array2);