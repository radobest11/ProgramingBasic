function challengeTheWedding(input) {


    let countMan = Number(input[0]);
    let countWoman = Number(input[1]);
    let countTable = Number(input[2]);

    let counter = 0;

    let buff = "";


    for (let i = 1 ; i <= countMan; i++) {

        for(let a = 1; a <= countWoman; a++) {

            counter++;

            if(counter > countTable) {


                break;
            }

            buff += (`(${i} <-> ${a}) `)

        }
    }

    console.log(buff)
}
challengeTheWedding(["5", "8", "40"])