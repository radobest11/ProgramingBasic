function fishingBoat (input){

    let budget = Number(input[0]);

    let season = input[1];

    let countFishers = Number(input[2]);

    let rentShip = 0;

    switch(season) {

        case "Spring" : rentShip = 3000 ;

        if (countFishers <= 6){

            rentShip = rentShip * 0.9;

        } else if (countFishers >= 7 && countFishers <= 11) {

            rentShip = rentShip * 0.85;

        } else if (countFishers >= 12) {

            rentShip = rentShip * 0.75;
        }

        break;

        case "Summer" : rentShip = 4200;

        if (countFishers <= 6){

            rentShip = rentShip * 0.9;

        } else if (countFishers >= 7 && countFishers <= 11) {

            rentShip = rentShip * 0.85;

        } else if (countFishers >= 12) {

            rentShip = rentShip * 0.75;
        }


        break;

        case "Autumn" : rentShip = 4200;

        if (countFishers <= 6){

            rentShip = rentShip * 0.9;

        } else if (countFishers >= 7 && countFishers <= 11) {

            rentShip = rentShip * 0.85;

        } else if (countFishers >= 12) {

            rentShip = rentShip * 0.75;
        }


        break;

        case "Winter" : rentShip = 2600;

        if (countFishers <= 6) {

            rentShip = rentShip * 0.9;

        } else if (countFishers >= 7 && countFishers <= 11) {

            rentShip = rentShip * 0.85;

        } else if (countFishers >= 12) {

            rentShip = rentShip * 0.75;
        }
             

        break;



    }

    if (countFishers % 2 === 0 && season !== "Autumn") {


        rentShip = rentShip * 0.95;
    }

    let res = Math.abs (budget - rentShip);

    if (budget >= rentShip) {

        console.log (`Yes! You have ${res.toFixed(2)} leva left.`);

    
    } else if (budget < rentShip) {

        console.log (`Not enough money! You need ${res.toFixed(2)} leva.`);
    
    }
}

fishingBoat(["3000",
"Summer",
"11"])







