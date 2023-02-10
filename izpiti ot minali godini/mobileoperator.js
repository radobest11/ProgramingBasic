function mobielOperator(input) {


    let yearsOfContract = input[0];
    let typeOfContract = input[1];
    let internet = input[2];
    let countMounthForPayment = Number(input[3]);

    let price = 0;
    let priceContract = 0;

    switch (typeOfContract) {

        case "Small":

            if (yearsOfContract === "one") {

                priceContract = 9.98;


            } else {

                priceContract = 8.58;
            }


            break;

        case "Middle":

            if (yearsOfContract === "one") {

                priceContract = 18.99;


            } else {

                priceContract = 17.09;
            }
            break;

        case "Large":

            if (yearsOfContract === "one") {

                priceContract = 25.98;


            } else {

                priceContract = 23.59;
            }
            break;

        case "ExtraLarge":

            if (yearsOfContract === "one") {

                priceContract = 35.99;


            } else {

                priceContract = 31.79;
            }
            break;


         
    }


    if (internet === "yes" ){

        if (priceContract <= 10) {

            price = (priceContract + 5.5) * countMounthForPayment;

        } else if (priceContract > 10 && priceContract <= 30) {

            price = (priceContract + 4.35) * countMounthForPayment;

        } else {

            price = (priceContract + 3.85) * countMounthForPayment
        }
    } else {

        price = priceContract * countMounthForPayment
    }

  if(yearsOfContract === "two") {

       price *= 0.9625
   }

    console.log(`${price.toFixed(2)} lv.`)
}
mobielOperator(["two",
"Small",
"yes",
"20"])


