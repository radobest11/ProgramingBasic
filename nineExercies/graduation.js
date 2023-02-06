function graduation (input) {
    

    let name = input[0];


    let finishedClass = 1;

    let counterKlass = 0;

    let totalGrades = 0;

    index = 1;


    while(finishedClass <= 12) {
        
        counterKlass++;

        let currentGrade = Number(input[index]);


        if (currentGrade < 4) {

            console.log(`${name} has been excluded at ${counterKlass} grade`);
            break;


        }

        

        totalGrades += currentGrade;
        
        index++;
        currentGrade = Number(input[index]);

        
        
        let avrageGrade = totalGrades / 12;

        if (counterKlass === 12) {

            console.log(`${name} graduated. Average grade: ${avrageGrade.toFixed(2)}`);
            break;

        }
        
       
        
        
    }
   
    
    
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
