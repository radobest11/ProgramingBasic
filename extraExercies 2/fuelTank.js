function fuelTank (input) {

    let fuel = input[0].toLowerCase();

    let litreFuel = Number(input[1]);

    if (litreFuel >= 25) {

        if (fuel === "gas" || fuel === "diesel" || fuel === "gasoline") {

            console.log (`You have enough ${fuel}.`);

        } else {

            console.log (`Invalid fuel!`)
        }

        

    } else if (litreFuel < 25) {

        if (fuel === "gas" || fuel === "diesel" || fuel === "gasoline") {

        console.log (`Fill your tank with ${fuel}!`);

        } else {

        console.log (`Invalid fuel!`);

        }
    }
} 
fuelTank(["Diesel", "10"])