function worldSnookerChampionship(input) {

    let etapNaParvenstvoto = input[0];
    let kindOfBIlet = input[1];
    let countTickets = Number(input[2]);
    let picture = input[3];

    let finalPrice = 0;


    switch (kindOfBIlet) {

        case "Standard":

            if (etapNaParvenstvoto === "Quarter final") {

                finalPrice = countTickets * 55.5;

            } else if (etapNaParvenstvoto === "Semi final") {

                finalPrice = countTickets * 75.88;

            } else {

                finalPrice = countTickets * 110.1;
            }
            break;

        case "Premium":

            if (etapNaParvenstvoto === "Quarter final") {

                finalPrice = countTickets * 105.2;

            } else if (etapNaParvenstvoto === "Semi final") {

                finalPrice = countTickets * 125.22;

            } else if (etapNaParvenstvoto === "Final") {

                finalPrice = countTickets * 160.66;
            }
            break;

        case "VIP":

            if (etapNaParvenstvoto === "Quarter final") {

                finalPrice = countTickets * 118.9;

            } else if (etapNaParvenstvoto === "Semi final") {

                finalPrice = countTickets * 300.4;

            } else {

                finalPrice = countTickets * 400;
            }
            break;


    }

    let pricePicture = 0;

    if(picture === "Y") {

        pricePicture = countTickets * 40
    } 


    if (finalPrice > 2500 && finalPrice <= 4000) {

        finalPrice *= 0.9;

    } else if (finalPrice > 4000) {

        finalPrice *= 0.75;

        if(picture === "Y") {

            pricePicture = 0;
        }

       
    }


   let amountPayment = finalPrice + pricePicture;


    console.log(amountPayment.toFixed(2))
}
worldSnookerChampionship(["Final",
"Premium",
"25",
"Y"])
