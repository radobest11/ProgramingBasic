function flowers (input) {

    let countHrizantemi = Number(input[0]);

    let countRoses = Number(input[1]);

    let countTulips = Number(input[2]);

    let season = input[3];

    let holiday = input[4];

    let priceHrizantemi = 0;

    let priceRoses = 0;

    let priceTulips = 0;

   
    switch (season) {

        case "Spring" :

        case "Summer" :

        priceHrizantemi = countHrizantemi * 2;
        priceRoses = countRoses * 4.1;
        priceTulips = countTulips * 2.5;

        break;

        case "Autumn" :

        case "Winter" :

        priceHrizantemi = countHrizantemi * 3.75;
        priceRoses = countRoses * 4.5;
        priceTulips = countTulips * 4.15;

        break;
             
                
    }

    if (holiday === "Y") {

        priceTulips *= 1.15;
        priceRoses *= 1.15;
        priceHrizantemi *= 1.15;
    }

    let finalPrice = priceHrizantemi + priceRoses + priceTulips;

    if (countTulips >= 7 && season === "Spring") {

        finalPrice *= 0.95;

    } else if (countRoses >= 10 && season === "Winter") {

        finalPrice *= 0.9;

    } 
    if (countRoses + countTulips + countHrizantemi > 20) {

        finalPrice *= 0.8;
    
    }

    console.log((finalPrice + 2).toFixed(2));
 }   
flowers(["2", "4", "8", "Spring", "Y"])