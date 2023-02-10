function goldMine (input) {


    let index = 0;

    let countLocation = Number(input[index]);
    index++;

    


    for(let i = 1; i <= countLocation; i++){

        let totalDobiv = 0;


        let avgDobiv = Number(input[index]);
        index++;
        let countDay = Number(input[index]);
        index++;

        for(let a = 1; a <= countDay; a++){

            let dobivPerDay = Number(input[index]);
            index++;

            totalDobiv += dobivPerDay;

            

        }

        let avgDobivRealno = totalDobiv / countDay;

        let diff = Math.abs(avgDobivRealno - avgDobiv);

        if(avgDobivRealno >= avgDobiv) {

            console.log(`Good job! Average gold per day: ${avgDobivRealno.toFixed(2)}.`);

        } else {


            console.log(`You need ${diff.toFixed(2)} gold.`);
        }


        
    }

    
}
goldMine(["1",
"5",
"3",
"10",
"1",
"3"])

