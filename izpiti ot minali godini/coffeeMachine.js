function coffeeMachine(input) {

    let drink = input[0];
    let isSugar = input[1];
    let countDrink = Number(input[2]);

    let price = 0;


    switch (drink) {


        case "Espresso":

            if (isSugar === "Without") {

                price = 0.9 * countDrink;


            } else if (isSugar === "Normal") {

                price = 1 * countDrink;

            } else {

                price = 1.2 * countDrink
            }
            break;

        case "Cappuccino":

            if (isSugar === "Without") {

                price = 1 * countDrink;


            } else if (isSugar === "Normal") {

                price = 1.2 * countDrink;

            } else {

                price = 1.6 * countDrink
            }
            break;

        case "Tea":

            if (isSugar === "Without") {

                price = 0.5 * countDrink;


            } else if (isSugar === "Normal") {

                price = 0.6 * countDrink;

            } else {

                price = 0.7 * countDrink
            }
            break;


    }




    if (isSugar === "Without") {

        price *= 0.65
    }

    if (drink === "Espresso" && countDrink >= 5) {


        price *= 0.75;

    }

    if (price > 15) {

        price *= 0.8
    }

    console.log(`You bought ${countDrink} cups of ${drink} for ${price.toFixed(2)} lv.`)


}
coffeeMachine(["Espresso",
"Without",
"10"])
