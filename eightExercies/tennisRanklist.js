function tennsiRanklist (input) {

    let index = 0;
    let countTournament = Number(input[index]);
    index++;

    let startPoints = Number(input[index]);
    index++;

    let currentPoints = 0;
    let countWin = 0;


    for (let i = 0; i < countTournament; i++) {

        let res = input[index];
        index++;

        switch(res) {

            case "W" : currentPoints += 2000; 

            countWin++;
        
            break;

            case "F" : currentPoints += 1200;

            break;

            case "SF" : currentPoints += 720;

            break;


        }

        



    }

        let finalPoints = startPoints + currentPoints;
        let avaragePoints = currentPoints / countTournament;
        let win = countWin / countTournament * 100;

        console.log(`Final points: ${finalPoints}`);
        console.log(`Average points: ${Math.floor(avaragePoints)}`);
        console.log(`${win.toFixed(2)}%`);

}
tennsiRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])


