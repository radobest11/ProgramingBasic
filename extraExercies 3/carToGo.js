function carToGo (input) {

    let budget = Number(input[0]);

    let season = input[1];

    let car;

    let clas;

    let carPrice = 0;


    switch(season) {

        case "Summer" :

        if (budget <= 100) {

            car = "Cabrio";
            clas = "Economy class";
            carPrice = 0.35 * budget;

        } else if (budget > 100 && budget <= 500) {

            car = "Cabrio";
            clas = "Compact class";
            carPrice = 0.45 * budget;

        } else {

            car = "Jeep";
            clas = "Luxury class";
            carPrice = 0.9 * budget;
        }
        break;

        case "Winter" :

            if (budget <= 100) {

                car = "Jeep";
                clas = "Economy class";
                carPrice = 0.65 * budget;
    
            } else if (budget > 100 && budget <= 500) {
    
                car = "Jeep";
                clas = "Compact class";
                carPrice = 0.8 * budget;
    
            } else {
    
                car = "Jeep";
                clas = "Luxury class";
                carPrice = 0.9 * budget;
            }
            break;

    }

    console.log(`${clas}`);
    console.log(`${car} - ${carPrice.toFixed(2)}`)

}
carToGo(["450", "Summer"])