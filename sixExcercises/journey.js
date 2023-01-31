function journes(input) {

    let budget = Number(input[0]);

    let season = input[1];

    let cost = 0;

    let destination;

    let accommodation;

    if (budget <= 100) {

        if (season === "summer") {

            cost = budget * 0.3;

            destination = "Bulgaria";

        } else if (season = "winter") {

            cost = budget * 0.7;

            destination = "Bulgaria";
        }

    } else if (budget > 100 && budget <= 1000) {

        if (season === "summer") {

            cost = budget * 0.4;

            destination = "Balkans";

        } else if (season === "winter") {

            cost = budget * 0.8;

            destination = "Balkans";
        }
    } else if (budget > 1000) {

        cost = budget * 0.9;

        destination = "Europe";
    }

    if (season === "winter" || destination === "Europe") {

        accommodation = "Hotel";

    } else if (season === "summer") {

        accommodation = "Camp";
    }

    console.log (`Somewhere in ${destination}`);
    console.log (`${accommodation} - ${cost.toFixed(2)}`);
}

journes(["1500", "summer"])