function transportPrice(input) {

    let kilometers = Number(input[0]);

    let tariff = input[1];

    let finalPrice = 0;

    if (kilometers <= 19) {

        if(tariff === "day") {

            finalPrice = 0.7 + (0.79 * kilometers);

        

        
        } else if (tariff === "night") {

            finalPrice = 0.7 + (0.9 * kilometers);
        }
    } else if (kilometers >= 20 && kilometers <= 99) {

        if(tariff === "day") {

            finalPrice = 0.09 * kilometers;

            

        } else if (tariff === "night") {

            finalPrice = 0.09 * kilometers;
        }

        
           
        
    } else if (kilometers >= 100) {

        if(tariff === "day") {

            finalPrice = 0.06 * kilometers;

        } else if (tariff === "night") {

            finalPrice = 0.06 * kilometers;
        }

        
    }

    console.log(finalPrice.toFixed(2));
}
transportPrice(["5", "day"])