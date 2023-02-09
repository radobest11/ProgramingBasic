function easterEggsBattle(input) {

    let index = 0;

    let countEggsFirstPlayer = Number(input[index]);

    index++;

    let countEggsSecondPlayer = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let countFirstPlayer = 0;
    let countSecondPlayer = 0;
    let res1 = 0;
    let res2 = 0;

    while (command !== "End of battle") {


        let players = command;


        if (players === "one") {

            countSecondPlayer++;

        } else if (players === "two") {

            countFirstPlayer++;
        }


        res1 = countEggsFirstPlayer - countFirstPlayer;
        res2 = countEggsSecondPlayer - countSecondPlayer;

        if (res1 === 0) {

            console.log(`Player one is out of eggs. Player two has ${res2} eggs left.`);

            break;

        } else if (res2 === 0) {

            console.log(`Player two is out of eggs. Player one has ${res1} eggs left.`);

            break;

        }

        



        command = input[index];
        index++;

    }
    if (res1 > 0 && res2 > 0) {


        console.log(`Player one has ${res1} eggs left.`);
        console.log(`Player two has ${res2} eggs left.`);

    }


}
easterEggsBattle(["6",
"3",
"one",
"two",
"two",
"one",
"one"])

