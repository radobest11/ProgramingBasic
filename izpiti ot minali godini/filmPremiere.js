function filmPremiere(input) {


    let name = input[0];
    let food = input[1];
    let countTickets = Number(input[2]);


    let price = 0;


    switch (name) {


        case "John Wick":

            if (food === "Drink") {


                price = 12 * countTickets;

            } else if (food === "Popcorn") {

                price = 15 * countTickets;

            } else {


                price = 19 * countTickets;
            }

            break;

        case "Star Wars":

            if (food === "Drink") {


                price = 18 * countTickets;

            } else if (food === "Popcorn") {

                price = 25 * countTickets;

            } else {


                price = 30 * countTickets;
            }

            break;

        case "Jumanji":

            if (food === "Drink") {


                price = 9 * countTickets;

            } else if (food === "Popcorn") {

                price = 11 * countTickets;

            } else {


                price = 14 * countTickets;
            }

            break;

    }

    if (name === "Star Wars" && countTickets >= 4) {

        price *=   0.7
    }

    if (name === "Jumanji" && countTickets === 2) {

        price *=  0.85;

    }

    console.log(`Your bill is ${price.toFixed(2)} leva.`)

}
filmPremiere(["John Wick",
"Drink",
"6"])
