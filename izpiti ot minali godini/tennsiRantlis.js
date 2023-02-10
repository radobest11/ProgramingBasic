function tennsiRantlis(input) {

    let index = 0;

    let countTourniri = Number(input[index]);
    index++;

    let pointsBeginning = Number(input[index]);
    index++;

    let currentPoint = 0;

    let countW = 0;

   

    for (let i = 1; i <= countTourniri; i++) {

        let etapFromTurniri = input[index];
        index++;
                
        if (etapFromTurniri === "W") {

            currentPoint += 2000;
            countW++;

        } else if (etapFromTurniri === "F") {

            currentPoint += 1200;

        } else if (etapFromTurniri === "SF"){

            currentPoint += 720;
        }

                
    }


    let finalPoints = currentPoint + pointsBeginning;

    let avg = currentPoint / countTourniri;
    let percentage = (countW / countTourniri) * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(avg)}`);
    console.log(`${percentage.toFixed(2)}%`)


}tennsiRantlis(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
