function tournamentOfChristmas(input) {

    let index = 0;

    let days = Number(input[index]);

    index++;
    

    let counterDayWin = 0;

    let counterDayLose = 0;

    let finalamount = 0;
    

    for (let i = 1; i <= days; i++) {

        let command = input[index];
        index++;

        let couterWin = 0;
        let counterLose = 0;

        let totalAmount = 0;
        

        while (command !== "Finish") {

            let kindSport = command;

            let result = input[index];
            index++;

            

            if (result === "win") {

                totalAmount += 20;
                couterWin++;

            } else {

                counterLose++;
            }



            command = input[index];
            index++;


        }




        if (couterWin > counterLose) {

            counterDayWin++;

            totalAmount *= 1.1;

        } else {


            counterDayLose++;
        }
        
        finalamount += totalAmount

    }

    if (counterDayWin > counterDayLose) {

        finalamount *= 1.2;
    }

    if (counterDayWin > counterDayLose) {

        console.log(`You won the tournament! Total raised money: ${finalamount.toFixed(2)}`);

    } else {

        console.log(`You lost the tournament! Total raised money: ${finalamount.toFixed(2)}`)
    }
    
}
tournamentOfChristmas(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])
