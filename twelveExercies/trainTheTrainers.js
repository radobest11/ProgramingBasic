function trainTheTrainers (input) {

    let index = 0;

    let n = Number(input[index]);
    index++;

    let command = input[index];
    index++;
    let counter = 0;
    let sumGrade = 0;
    let avgWhole = 0;

    while(command !== "Finish"){

        counter ++;
        let nameOfPresentation = command;
        let tempSumGrade = 0;


        for(let i = 0; i < n; i++) {

            let grade = Number(input[index]);
            index++;
            tempSumGrade += grade;

            
        }

       
        command = input[index];
        index++;

        let avgGrade = tempSumGrade / n;
        console.log(`${nameOfPresentation} - ${avgGrade.toFixed(2)}.`);
        sumGrade += avgGrade;
        avgWhole = sumGrade / counter;


    
        
    }
    console.log(`Student's final assessment is ${avgWhole.toFixed(2)}.`)
   
}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])
