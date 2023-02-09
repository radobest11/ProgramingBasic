function easterParty (input){


    let countPeople = Number(input[0]);
    let priceFor1People = Number(input[1]);
    let budget = Number(input[2]);


    let priceCake = 0.1 * budget;

    if(countPeople >= 10 && countPeople <= 15 ) {

        priceFor1People *= 0.85;

    } else if (countPeople > 16 && countPeople <= 20) {

        priceFor1People *= 0.8;

    } else if (countPeople > 20) {

        priceFor1People *= 0.75;
    }

    let finalPrice = priceCake + countPeople * priceFor1People;

    let diff = Math.abs (budget - finalPrice);


    if (budget >= finalPrice) {

        console.log(`It is party time! ${diff.toFixed(2)} leva left.`);


    } else {

        console.log(`No party! ${diff.toFixed(2)} leva needed.`)
    }
}
easterParty(["24",
"35",
"550"])


