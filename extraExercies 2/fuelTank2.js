function fuelTank2 (input) {

    let typeFuel = input[0];

    let fuel = Number(input[1]);

    let clubCard = input[2];

    let finalPrice = 0;


  switch (clubCard) {

    case "Yes" :

        if (typeFuel === "Gasoline") {

            finalPrice = (2.22 - 0.18) * fuel; break;

        } else if (typeFuel === "Diesel") {

            finalPrice = (2.33 - 0.12) * fuel; break;

        } else {

            finalPrice = (0.93 - 0.08) * fuel; break;
        }

       case "No" :
           
        if (typeFuel === "Gasoline") {

            finalPrice = (2.22) * fuel; break;

        } else if (typeFuel === "Diesel") {

            finalPrice = (2.33) * fuel; break;

        } else {

            finalPrice = (0.93) * fuel; break;
        }
    }

    if (fuel >= 20 && fuel <= 25) {

        finalPrice = finalPrice * 0.92;

    } else if (fuel > 25) {

        finalPrice = finalPrice * 0.9;
    }

    console.log(`${finalPrice.toFixed(2)} lv.`)
}
fuelTank2(["Gas", "30", "Yes"])