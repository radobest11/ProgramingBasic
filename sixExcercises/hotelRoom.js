function hotelRoom (input) {

    let month = input[0];

    let nights = Number(input[1]);

    let costApartment = 0;

    let costStudio = 0;

    switch (month) {

        case "May" :

        case "October" :

        costApartment = nights * 65;

        costStudio = nights * 50;

        if (nights > 7 && nights <= 13) {

            costStudio = nights * 50 * 0.95;

        } else if (nights > 14) {


            costStudio = nights * 50 * 0.7;

            costApartment = nights * 65 * 0.9;

            

        } 

        break;

        case "June" :

        case "September" :

        costApartment = nights * 68.7;

        costStudio = nights * 75.2;

        if (nights > 14) {


            costStudio = nights * 75.2 * 0.8;

            costApartment = nights * 68.70 * 0.9;

    
            
        }
        break;



        case "July" :

        case "August" :

        costStudio = nights * 76;

        costApartment = nights * 77;


        if (nights > 14) {

            costApartment = nights * 77 * 0.9;

        }

        break;

    }

    console.log (`Apartment: ${costApartment.toFixed(2)} lv.`);

    console.log(`Studio: ${costStudio.toFixed(2)} lv.`)

}
hotelRoom(["May",
"15"])








