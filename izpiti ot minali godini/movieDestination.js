function movieDestination(input) {


    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let countDays = Number(input[3]);

    let price = 0;

    switch (destination) {

        case "Dubai":

            if (season === "Winter") {

                price = 45000 * countDays;

            } else if (season === "Summer") {

                price = 40000 * countDays
            }

            break;

        case "Sofia":

            if (season === "Winter") {

                price = 17000 * countDays;

            } else if (season === "Summer") {

                price = 12500 * countDays
            }

            break;

        case "London":


            if (season === "Winter") {

                price = 24000 * countDays;

            } else if (season === "Summer") {

                price = 20250 * countDays
            }

            break;


    }


    if(destination === "Dubai") {

        price *= 0.7;

    }

    if(destination === "Sofia") {

        price *= 1.25;

    }


    let diff = Math.abs(budget - price)

    if(budget >= price) {

        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);

    } else {

        console.log(`The director needs ${diff.toFixed(2)} leva more!`)
    }
}
movieDestination(["400000",
"Sofia",
"Winter",
"20"])
