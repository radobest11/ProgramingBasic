function easterGuests (input){


    let countGuests = Number(input[0]);
    let budget = Number(input[1]);

    let countKozunaci = Math.ceil(countGuests / 3);
    let countEggs = 2 * countGuests;

    let priceKozunaci = countKozunaci * 4;
    let priceEggs = countEggs * 0.45;

    let finalPrice = priceKozunaci + priceEggs;

    let diff = Math.abs(finalPrice - budget);

    if(budget >= finalPrice) {

        console.log(`Lyubo bought ${countKozunaci} Easter bread and ${countEggs} eggs.`);
        console.log(`He has ${diff.toFixed(2)} lv. left.`);

    } else {

        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${diff.toFixed(2)} lv. more.`)
    }
}
easterGuests(["9",
"12"])
