function footballResults (input){


    let firstMatch = input[0];
    let secondMatch = input[1];
    let thirthMatch = input[2];

    let a1 = Number(firstMatch[0]);
    let a2 = Number(firstMatch[2])

    let b1 = Number(secondMatch[0]);
    let b2 = Number(secondMatch[2]);

    let c1 = Number(thirthMatch[0]);
    let c2 = Number(thirthMatch[2]);

    let countWin = 0;
    let countLose = 0;
    let countRaven = 0;

    if (a1 > a2) {

        countWin++;

    } else if (a1 < a2) {

        countLose++;

    } else if (a1 === a2) {

        countRaven++;
    }
    
    if (b1 < b2) {

        countLose++;

    } else if (b1 > b2) {

        countWin++;

    } else if (b1 === b2) {

        countRaven++;
    }
    
    if (c1 === c2) {

        countRaven++;

    } else if (c1 > c2) {

        countWin++;

    } else if (c1 < c2) {

        countLose++;
    }


    console.log(`Team won ${countWin} games.`);
    console.log(`Team lost ${countLose} games.`);
    console.log(`Drawn games: ${countRaven}`);

}
footballResults(["0:2",
"0:1",
"3:3"])

