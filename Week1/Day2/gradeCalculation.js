/* To calculate Grade of the students using Switch 
for understanding let us assume that total mark can within 100
and for mark above 70 -> Grade is Distinction
and for mark above 50 < 70 -> grade is First class
and for mark above 35 <50 -> grade is Second class
and for mark below 35 -> grade is failed
*/



let marks = 30;

function gradeMark(mark){
    switch(true){
        case mark > 70 :
            console.log("Grade: Distinction");
            break;
        case (mark > 50 && mark <=70) :
            console.log("Grade: First Class");
            break;
        case (mark >=35 && mark <=50) :
            console.log("Grade: Second Class");
            break;
        default :
            console.log("Grade: Failed");
    }
}

gradeMark(marks);
