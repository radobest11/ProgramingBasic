function touristShop (input) {

    let index = 0;

    let budget = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let finalPrice = 0;

    let count = 0;

    while(command !== "Stop") {

        count++;


        let nameProduct = command;
        let priceProduct = Number(input[index]);
        index++;

        if(count % 3 === 0) {

            priceProduct *= 0.5;
        }

        finalPrice += priceProduct;

        let diff = Math.abs(finalPrice - budget);


        if(finalPrice > budget) {

            console.log(`You don't have enough money!`);
            console.log(`You need ${diff.toFixed(2)} leva!`)

            break;
        }

        command = input[index];
        index++;
    }

    if(command === "Stop") {


        console.log(`You bought ${count} products for ${finalPrice.toFixed(2)} leva.`)
    }

    
}
touristShop(["54",
"Thermal underwear",
"24",
"Sunscreen",
"45"])

