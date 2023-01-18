function matchTickets (input) {

    let budget = Number(input[0]);

    let categoryBilet = input[1];

    let totalPeople = Number(input[2]);

    priceForBilets = 0;

    switch(categoryBilet) {

        case "VIP" :

        if (totalPeople <= 4) {

            priceForBilets = (totalPeople * 499.99) + (budget * 0.75);

        } else if (totalPeople >=5 && totalPeople <= 9) {

            priceForBilets = (totalPeople * 499.99) + (budget * 0.6);

        } else if (totalPeople >= 10 && totalPeople <= 24) {

            priceForBilets = (totalPeople * 499.99) + (budget * 0.5);

        } else if (totalPeople >= 25 && totalPeople <= 49) {

            priceForBilets = (totalPeople * 499.99) + (budget * 0.4);

        } else {

            priceForBilets = (totalPeople * 499.99) + (budget * 0.25);

        }
        break;

        case "Normal" :

            if (totalPeople <= 4) {

                priceForBilets = (totalPeople * 249.99) + (budget * 0.75);
    
            } else if (totalPeople >=5 && totalPeople <= 9) {
    
                priceForBilets = (totalPeople * 249.99) + (budget * 0.6);
    
            } else if (totalPeople >= 10 && totalPeople <= 24) {
    
                priceForBilets = (totalPeople * 249.99) + (budget * 0.5);
    
            } else if (totalPeople >= 25 && totalPeople <= 49) {
    
                priceForBilets = (totalPeople * 249.99) + (budget * 0.4);
    
            } else {
    
                priceForBilets = (totalPeople * 249.99) + (budget * 0.25);
    
            }

            break;



    } 
    
    
    let diff = Math.abs(budget - priceForBilets);


    if (budget >= priceForBilets) {

        console.log (`Yes! You have ${diff.toFixed(2)} leva left.`);

    } else {

        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);


    }

    
}
matchTickets(["1000", "Normal", "1"])