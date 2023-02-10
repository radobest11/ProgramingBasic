function footballTournament(input) {


    let index = 0;

    let name = input[index];
    index++;

    let countMatch = Number(input[index]);
    index++;

    let pointsWin = 0;
    let pointsX = 0;
    let countWin = 0;
    let countX = 0;
    let countLost = 0;


    for (let i = 1; i <= countMatch; i++) {


        let result = input[index];
        index++;



        switch (result) {


            case "W":
                pointsWin += 3;
                countWin++;
                break;

            case "D":
                pointsX += 1;
                countX++;
                break;

            case "L":

                countLost++;
                break;


        }

        if (countMatch === 0) {

            console.log(`${name} hasn't played any games during this season.`);
            break;
        }



    }


    let finalPoints = pointsWin + pointsX;

    let winPer = countWin / countMatch * 100;

    if (countMatch >= 1) {

        console.log(`${name} has won ${finalPoints} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${countWin}`);
        console.log(`## D: ${countX}`);
        console.log(`## L: ${countLost}`);
        console.log(`Win rate: ${winPer.toFixed(2)}%`);



    } else {

        console.log(`${name} hasn't played any games during this season.`)

    }

    


}
footballTournament(["Barcelona",
"7",
"W",
"D",
"L",
"L",
"W",
"W",
"D"])

