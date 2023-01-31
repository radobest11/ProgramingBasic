function skiTrip (input) {

    let stayLength = Number(input[0]);

    let roomType = input[1];

    let feedback = input[2];

    let nights = 0;

    nights = stayLength - 1;

    let finalPrice = 0;

    switch (roomType) {

        case "room for one person" :

        finalPrice = nights * 18;
        
        break;

        case "apartment" :

        finalPrice = nights * 25;


        if (stayLength < 10) {

            finalPrice = finalPrice * 0.7;

        } else if (stayLength >= 10 && stayLength <= 15) {

            finalPrice = finalPrice * 0.65;

        } else if (stayLength > 15) {

            finalPrice = finalPrice * 0.5;

        }
        break;

        case "president apartment" :

        finalPrice = nights * 35;

        if (stayLength < 10) {

            finalPrice = finalPrice * 0.9;

        } else if (stayLength >= 10 && stayLength <= 15) {

            finalPrice = finalPrice * 0.85;

        } else if (stayLength > 15) {

            finalPrice = finalPrice * 0.8;

        }
        break;

    }

    if (feedback === "positive") {

        finalPrice = finalPrice * 1.25;

    } else if (feedback === "negative") {

        finalPrice = finalPrice * 0.9;
    }

    console.log(finalPrice.toFixed(2))

}
skiTrip(["30",
"president apartment",
"negative"])
