function flowerShop (input) {

    let countMagnolias = Number(input[0]);

    let countZumbuls = Number(input[1]);

    let countRoses = Number(input[2]);

    let countCactus = Number(input[3]);

    let budget = Number(input[4]);

    let priceMagnolias = countMagnolias * 3.25;

    let priceZumbils = countZumbuls * 4;

    let priceRoses = countRoses * 3.5;

    let priceCactus = countCactus * 8;

    let totalCost = (priceMagnolias + priceZumbils + priceRoses + priceCactus) * 0.95;

    let diff = Math.abs(totalCost - budget);

    if ( budget <= totalCost) {

        console.log(`She is left with ${Math.floor(diff)} leva.`);

    } else {


        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
    }
    
    
}
flowerShop(["2",
"3",
"5","1", "50"])