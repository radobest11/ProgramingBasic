function dishwasher (input) {

    let index = 0;

    let countBottles = Number(input[index]);
    index++;

    let totalDetergent = countBottles * 750;

    let counter = 0;

    let costDetergent = 0;

    let countChinii = 0;
    let counttendjeri = 0;

    let command = input[index];
    index++;

    while(command !== "End") {

        

        let tempDishes = Number(command);

        counter++;

        if(counter % 3 === 0) {

            costDetergent += tempDishes * 15;
            counttendjeri += tempDishes;

        } else {

            costDetergent += tempDishes * 5;
            countChinii += tempDishes;
        }
        

        if (totalDetergent < costDetergent) {

            break;
        }

        
        command = input[index];
        index++;

    }

    let diff = Math.abs(totalDetergent - costDetergent);

    if (totalDetergent >= costDetergent){

        console.log(`Detergent was enough!`);
        console.log(`${countChinii} dishes and ${counttendjeri} pots were washed.`);
        console.log(`Leftover detergent ${diff} ml.`)

    } else {

        console.log(`Not enough detergent, ${diff} ml. more necessary!`)
    }

    
}
dishwasher(["1" ,"10" ,"15" ,"10" ,"12", "13", "30"])

