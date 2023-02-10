function safari(input) {

    let budget = Number(input[0]);
    let disel = Number(input[1]);
    let days = input[2];

    let ekskurzovod = 100;

    let priceDisel = disel * 2.1;

    let finalPrice = ekskurzovod + priceDisel;

    if (days === "Saturday") {

        finalPrice *= 0.9;

    } else if (days === "Sunday") {

        finalPrice *= 0.8
    }

    let diff = Math.abs(budget - finalPrice);

    if (budget >= finalPrice) {


        console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`);

    }else {

        console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`)
    }
}
safari(["120",
"30",
"Saturday"])
