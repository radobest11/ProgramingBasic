function SantasHoliday(input) {

    let days = Number(input[0]);
    let kindOfRooms = input[1];
    let feedback = input[2];

    let nights = days - 1;

    let price = 0;

    

    switch (kindOfRooms) {


        case "room for one person" : 
        price = nights * 18;

       
        
        break;

        case "apartment" :

            if(days < 10) {

                price = nights * 25  * 0.7;
    
            } else if (days >= 10 && days <= 15) {
    
                price = nights * 25 * 0.65;

            } else {


                price = nights * 25 * 0.5;
            }

        break;

        default:

            if(days < 10) {

                price = nights * 35  * 0.9;
    
            } else if (days >= 10 && days <= 15) {
    
                price = nights * 35 * 0.85;

            } else {


                price = nights * 35 * 0.8;
            }
            break;


    }

    if (feedback === "positive") {

        price *= 1.25;

    } else {

        price *= 0.9;
    }
    
   console.log(price.toFixed(2))
 
    
}
SantasHoliday(["30",
"president apartment",
"negative"])


