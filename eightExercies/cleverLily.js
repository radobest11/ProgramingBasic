function cleverLily (input) {

    let age = Number(input[0]);

    let priceWashingMachine = Number(input[1]);

    let toyPrice = Number(input[2]);

    let money = 0;
    let currentMoney = 10;
    let toy = 0;

    for (i = 1; i <= age; i++) {

        if (i % 2 === 0) {

            money += currentMoney;
            currentMoney += 10;
            money -= 1;



        } else {

            toy++;
        }
    }


    let totalMoney = toy * toyPrice + money;

    let diff = Math.abs(totalMoney - priceWashingMachine);

    if (totalMoney >= priceWashingMachine) {

        console.log(`Yes! ${diff.toFixed(2)}`)


    } else {

        console.log(`No! ${diff.toFixed(2)}`)


    }

}
cleverLily(["21",
"1570.98",
"3"])

