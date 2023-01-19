function hospital (input) {

    let index = 0;

    let period = Number(input[index]);
    index++;

    let countPaciantTreated = 0;
    let countPacientUntreated = 0;
    let doctors = 7;


    for(let i = 1; i <= period; i++) {

        let countPaciant = Number(input[index]);

        index++;



        if (i % 3 === 0 && countPacientUntreated > countPaciantTreated) {

            doctors ++;
            
        }


        if(countPaciant > doctors) {

            countPacientUntreated += countPaciant - doctors;

            countPaciantTreated += doctors;

        } else {

            countPaciantTreated += countPaciant;

        }


         
            
        
    }

    console.log(`Treated patients: ${countPaciantTreated}.`);
    console.log(`Untreated patients: ${countPacientUntreated}.`);
}
hospital(["4", "7", "27", "9", "1"])