function familyTrip(input) {


    let budget = Number(input[0]);
    let countNights = Number(input[1]);
    let priceNights = Number(input[2]);
    let additionalCostsPer = Number(input[3]);




    countNights > 7 ? priceNights *= 0.95 : priceNights;

    let finalPrice = (countNights * priceNights) + (budget) * additionalCostsPer / 100;

    let diff = Math.abs(finalPrice - budget)

    if (finalPrice <= budget) {

        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`)
    } else {

        console.log(`${diff.toFixed(2)} leva needed.`)
    }

}
familyTrip(["800.50",
"8",
"100",
"2"])
