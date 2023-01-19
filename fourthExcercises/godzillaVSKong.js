function godzillaVSKong (input) {


    let budget = Number(input[0]);
    let countStat = Number(input[1]);
    let priceClothesForOneStat = Number(input[2]);

    let decor = budget * 0.1;

    let totalPriceClothes = countStat * priceClothesForOneStat;

    if (countStat > 150) {

        totalPriceClothes = totalPriceClothes * 0.9;

    }

    let totalPriceMovie = decor + totalPriceClothes;

    let diff = Math.abs(budget - totalPriceMovie);

    if(budget >= totalPriceMovie) {

        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);

    } else {

        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);

    }


}

godzillaVSKong(["20000",
"120",
"55.5"])


