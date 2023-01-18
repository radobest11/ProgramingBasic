function vacation (input) {

    let budget = Number(input[0]);
    let season = input[1];

    let location;
    let accommodation;

    switch(season) {

        case "Summer" :

        if (budget <= 1000) {

            location = "Alaska";
            accommodation = "Camp";
            budget *= 0.65;

        }else if (budget > 1000 && budget <= 3000) {

            location = "Alaska";
            accommodation = "Hut";
            budget *= 0.8;

        } else {

            location = "Alaska";
            accommodation = "Hotel";
            budget *= 0.9;
        }
        break;

        case "Winter" :

        if (budget <=1000) {

            location = "Morocco";
            accommodation = "Camp";
            budget *= 0.45;

        } else if (budget > 1000 && budget <= 3000) {

            location = "Morocco";
            accommodation = "Hut";
            budget *= 0.6;

        } else {


            location = "Morocco";
            accommodation = "Hotel";
            budget *= 0.9;
        }
        break;

    }

    console.log(`${location} - ${accommodation} - ${budget.toFixed(2)}`)
}
vacation(["800", "Summer"])