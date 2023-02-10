function easterTrip(input) {

    let destination = input[0];

    let dateOfExcrustion = input[1];

    let countNights = Number(input[2]);

    let price = 0;

    switch(dateOfExcrustion) {

        case "21-23" :
            
        if (destination === "France") {

            price = countNights * 30;

        } else if (destination === "Italy") {

            price = countNights * 28;


        } else {

            price = countNights * 32;
        }

        break;

        case "24-27" :

            if (destination === "France") {

                price = countNights * 35;
    
            } else if (destination === "Italy") {
    
                price = countNights * 32;
    
    
            } else {
    
                price = countNights * 37;
            }
    
            break;

            case "28-31" :

                if (destination === "France") {

                    price = countNights * 40;
        
                } else if (destination === "Italy") {
        
                    price = countNights * 39;
        
        
                } else {
        
                    price = countNights * 43;
                }
        
                break;


    }     

    console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`)
    
}
easterTrip(["Italy", "21-23" , "7"])

