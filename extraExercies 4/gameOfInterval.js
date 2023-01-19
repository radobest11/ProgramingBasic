function gameOfInterval (input) {

    let index = 0;
    let countTotalEntrancy = Number(input[index]);
    index++;

    let currentPoints = 0;

    let counts0to9 = 0;
    let counts10to19 = 0;
    let counts20to29 = 0;
    let counts30to39 = 0;
    let counts40to50 = 0;
    let countsinvalid = 0;


    for( let i = 1; i <= countTotalEntrancy; i++) {

        let points = Number(input[index]);
        index++;

        if (points >= 0 && points <= 9) {

            currentPoints += 0.2 * points;
            counts0to9++;

        } else if (points >= 10 && points <= 19) {

            currentPoints += 0.3 * points;
            counts10to19++;

        } else if (points >= 20 && points <= 29) {

            currentPoints += 0.4 * points;
            counts20to29++;

        } else if (points >= 30 && points <= 39) {

            currentPoints += 50;
            counts30to39++;

        } else if (points >= 40 && points <= 50) {

            currentPoints += 100;
            counts40to50++;

        } else {

            currentPoints /= 2;
            countsinvalid++;
        }
    }

    console.log(currentPoints.toFixed(2));
    let from0to9Per = counts0to9 / countTotalEntrancy * 100;
    let from10to19Per = counts10to19 / countTotalEntrancy * 100;
    let from20to29Per = counts20to29 / countTotalEntrancy * 100;
    let from30tp39Per = counts30to39 / countTotalEntrancy * 100;
    let from40to50Per = counts40to50 / countTotalEntrancy * 100;
    let invalidPer = countsinvalid / countTotalEntrancy * 100;

    console.log(`From 0 to 9: ${from0to9Per.toFixed(2) + "%"}`);
    console.log(`From 10 to 19: ${from10to19Per.toFixed(2) + "%"}`);
    console.log(`From 20 to 29: ${from20to29Per.toFixed(2) + "%"}`);
    console.log(`From 30 to 39: ${from30tp39Per.toFixed(2) + "%"}`);
    console.log(`From 40 to 50: ${from40to50Per.toFixed(2) + "%"}`);
    console.log(`Invalid numbers: ${invalidPer.toFixed(2) + "%"}`)
}
gameOfInterval(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"])