function tennisEquipment (input){



    let priceOneTennsiRacket = Number(input[0]);
    let countTennisRacket = Number(input[1]);
    let countMaratonki = Number(input[2]);

    let priceMaratonki = 1/6 * priceOneTennsiRacket;

    let finalPriceTennisRacket = priceOneTennsiRacket * countTennisRacket;
    let finalPriceMaratonki = priceMaratonki * countMaratonki;

    let others = 0.2 * (finalPriceMaratonki + finalPriceTennisRacket);

    let finalPrice = others + finalPriceMaratonki + finalPriceTennisRacket;

    console.log(`Price to be paid by Djokovic ${Math.floor(1/8 * finalPrice)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(7/8 * finalPrice)}`)
}
tennisEquipment(["386",
"7",
"4"])

