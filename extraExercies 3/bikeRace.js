function bikeRace (input) {

    let juniors = Number(input[0]);

    let seniors = Number(input[1]);

    let track = input[2];

    let priceJuniors = 0;

    let priceSeniors = 0;

    switch (track) {

        case "trail" :

        priceJuniors = 5.5 * juniors;
        priceSeniors = 7 * seniors;

        break;

        case "cross-country" :

        

        if (juniors + seniors >= 50) {

            priceSeniors = 9.5 * seniors * 0.75;
            priceJuniors = 8 * juniors * 0.75;

        } else {
            priceJuniors = 8 * juniors;
            priceSeniors = 9.5 * seniors;

        }
        break;

        case "downhill" :

            priceJuniors = 12.25 * juniors;
            priceSeniors = 13.75 * seniors;

      break;
      
        case "road" :

            priceJuniors = 20 * juniors;
            priceSeniors = 21.50 * seniors;

        break;
        
            
        
    }

    let finalPrice = (priceSeniors + priceJuniors) * 0.95;

    console.log(finalPrice.toFixed(2));
}
bikeRace(["10", "20", "trail"])