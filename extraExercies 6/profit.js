function profit (input) {

    let count1Lev = Number(input[0]);

    let count2Leva = Number(input[1]);

    let count5Leva = Number(input[2]);

    let amount = Number(input[3]);


    for(let a = 0; a <= count1Lev; a++) {

        for (let b = 0; b <= count2Leva; b++) {

            for(let c = 0; c <= count5Leva; c++) {


                if(1 * a + 2 * b + 5 * c === amount) {


                    console.log(`${a} * 1 lv. + ${b} * 2 lv. + ${c} * 5 lv. = ${amount} lv.`)
                }
            }
        }
    }
}
profit(["5", "3", "1", "7"])