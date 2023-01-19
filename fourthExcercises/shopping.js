function shopping (input) {

    let budget = Number(input[0]);

    let countVideoCards = Number(input[1]);

    let countProcessors = Number(input[2]);
    
    let countRam = Number(input[3]);

    let amountVidoeCards = countVideoCards * 250;

    let amountProcssors = amountVidoeCards * 0.35;

    let amountRam = amountVidoeCards * 0.1;

    let totalAmount = amountVidoeCards + amountRam * countRam + amountProcssors * countProcessors;


    if (countVideoCards > countProcessors) {

        totalAmount = totalAmount * 0.85;

    }

    let diff = Math.abs(totalAmount - budget);

    if (budget >= totalAmount) {

        console.log(`You have ${diff.toFixed(2)} leva left!`);

    } else {

        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);

    }

}

shopping(["920.45",
"3",
"1",
"1"])



