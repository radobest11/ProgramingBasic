function truckDriver (input) {

    let season = input[0];
    let kilometers = Number(input[1]);

    let salary = 0;

    switch(season) {

        case "Spring" :
        case "Autumn" :

            if (kilometers <= 5000) {

                salary = 0.75 * kilometers;

                
            } else if (kilometers > 5000 && kilometers <= 10000) {

                salary = 0.95 * kilometers;

            } else {

                salary = 1.45 * kilometers;
            }


        break;

        case "Summer" :

            if (kilometers <= 5000) {

                salary = 0.90 * kilometers;

                
            } else if (kilometers > 5000 && kilometers <= 10000) {

                salary = 1.10 * kilometers;

            } else {

                salary = 1.45 * kilometers;
            }

            break;

        case "Winter" :
            
            if (kilometers <= 5000) {

                salary = 1.05 * kilometers;

                
            } else if (kilometers > 5000 && kilometers <= 10000) {

                salary = 1.25 * kilometers;

            } else {

                salary = 1.45 * kilometers;
            }

            break;

            
    }

    salary *= 0.9 * 4;

    console.log (`${salary.toFixed(2)}`)

}
truckDriver(["Summer", "3455"])