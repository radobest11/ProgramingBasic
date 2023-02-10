function travelAgency(input) {


    let city = input[0];
    let packet = input[1];
    let VIPcard = input[2];
    let stay = Number(input[3]);

    let price = 0;

    if (stay >= 7) {

        stay -= 1;
    }

    // if (stay < 1) {

    //     console.log("Days must be positive number!");

    ///  }



    switch (city) {

        case "Bansko":

            if (packet === "withEquipment" && VIPcard === "no") {

                price = 100 * stay


            } else if (packet === "withEquipment" && VIPcard === "yes") {


                price = 100 * stay * 0.9;

            } else if (packet === "noEquipment" && VIPcard === "no") {

                price = 80 * stay;

            } else if (packet === "noEquipment" && VIPcard === "yes") {

                price = 80 * stay * 0.95;

            }

            break;

        case "Borovets":

            if (packet === "withEquipment" && VIPcard === "no") {

                price = 100 * stay


            } else if (packet === "withEquipment" && VIPcard === "yes") {


                price = 100 * stay * 0.9;

            } else if (packet === "noEquipment" && VIPcard === "no") {

                price = 80 * stay;

            } else if (packet === "noEquipment" && VIPcard === "yes") {

                price = 80 * stay * 0.95;

            }

            break;

        case "Varna":

            if (packet === "withBreakfast" && VIPcard === "no") {

                price = 130 * stay;

            } else if (packet === "withBreakfast" && VIPcard === "yes") {

                price = 130 * stay * 0.88;

            } else if (packet === "noBreakfast" && VIPcard === "no") {

                price = 100 * stay;

            } else if (packet === "noBreakfast" && VIPcard === "yes") {

                price = 100 * stay * 0.93;

            }

            break;

        case "Burgas":


            if (packet === "withBreakfast" && VIPcard === "no") {

                price = 130 * stay;

            } else if (packet === "withBreakfast" && VIPcard === "yes") {

                price = 130 * stay * 0.88;

            } else if (packet === "noBreakfast" && VIPcard === "no") {

                price = 100 * stay;

            } else if (packet === "noBreakfast" && VIPcard === "yes") {

                price = 100 * stay * 0.93;

            }

            break;

        


    }

    if (stay >= 1) {

        if ((city === "Bansko" || city === "Borovets") && (packet === "withEquipment" || packet === "noEquipment")) {

            console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);

        } else if ((city === "Varna" || city === "Burgas") && (packet === "noBreakfast" || packet === "withBreakfast")) {

            console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);

        } else {

            console.log(`Invalid input!`);
        }




    } else {

        console.log("Days must be positive number!");

    }
}
travelAgency(["Varna",
"withBreakfast",
"yes",
"5"])
