function beerAndChips (input) {

    let name = input[0];
    let budget = Number(input[1]);
    let countBeer = Number(input[2]);
    let countChips = Number(input[3]);

    let totalPriceBeer = countBeer * 1.2;

    let onePacketPriceChips = totalPriceBeer * 0.45;

    let totalChips = onePacketPriceChips * countChips; 

    let totalCosts = totalPriceBeer + Math.ceil(totalChips);

    let diff = Math.abs(budget - totalCosts);

    if (budget >= totalCosts) {

        console.log(`${name} bought a snack and has ${diff.toFixed(2)} leva left.`);

    } else {


        console.log(`${name} needs ${diff.toFixed(2)} more leva!`);
    }



}
beerAndChips(["Valentin",
"5",
"2",
"4"])

