function easterCompetition(input) {

    let index = 0;

    let countKozunak = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let maxTotalGrade = 0;
    totalGrade = maxTotalGrade;
    let betterName = "";





    for (let i = 1; i <= countKozunak; i++) {
        
        let name = command;
        command = input[index];
        index++;

        let totalGrade = 0;





        while (command !== "Stop") {



            let currentGrade = Number(command);




            totalGrade += currentGrade;




            command = input[index];
            index++;





        }





        command = input[index];
        index++;


        console.log(`${name} has ${totalGrade} points.`);


        if (totalGrade > maxTotalGrade) {

            maxTotalGrade = totalGrade;

            betterName = name


            console.log(`${name} is the new number 1!`)


        }


    }

    console.log(`${betterName} won competition with ${maxTotalGrade} points!`)





}

easterCompetition(["3", "Chef Manchev", "10", "10", "10", "10", "Stop",
    "Natalie",
    "8",
    "2",
    "9",
    "Stop",
    "George",
    "9",
    "2",
    "4",
    "2",
    "Stop"])
