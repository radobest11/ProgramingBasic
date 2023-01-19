function toyshop (input) {

    let priceExcurstion = Number(input[0]);
    let countPuzzle = Number(input[1]);
    let countBarbies = Number(input[2]);
    let countTeddyBears = Number(input[3]);
    let countMinions = Number(input[4]);
    let countTrucks = Number(input[5]);

    let totalCountToys = countPuzzle + countBarbies + countTeddyBears + countMinions + countTrucks;

    let totalPrice = countPuzzle * 2.6 + countBarbies * 3 + countTeddyBears * 4.1 + countMinions * 8.2 + countTrucks * 2;

    if (totalCountToys >= 50) {

        totalPrice = totalPrice * 0.75;

    }


    totalPrice = totalPrice * 0.9;

    let diff = Math.abs(totalPrice - priceExcurstion);

    if (totalPrice >= priceExcurstion) {

        console.log(`Yes! ${diff.toFixed(2)} lv left.`);

    } else {

        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }

}

toyshop(["320",
"8",
"2",
"5",
"5",
"1"])

