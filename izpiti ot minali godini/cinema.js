function cinema (input) {

    let index = 0;

    let capacityHall = Number(input[index]);
    index++;

    let command = input[index];
    index++;
    let price = 0;
    let capacity = 0;


    while(command !== "Movie time!"){


        let currnetPeople = Number(command);

        capacity += currnetPeople;

        if(capacity > capacityHall) {

            console.log(`The cinema is full.`);
            
            break;
        }

        if(currnetPeople % 3 === 0) {

            price += currnetPeople * 5 - 5;

        } else {

            price += currnetPeople * 5;
        }

        

        
       
        

        


        command = input[index];
        index++;

        

    }

    let diff = Math.abs(capacityHall - capacity);

    if(command === "Movie time!") {

        console.log(`There are ${diff} seats left in the cinema.`)

    

    }

    

    console.log(`Cinema income - ${price} lv.`)
}
cinema(["50",
"15",
"10",
"10",
"15",
"5"])
