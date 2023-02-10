function puppyCare(input) {


    let index = 0;

    let FoodKg = Number(input[index]);
    index++;

    let finalFoodinGram = 0;

    let command = input[index];
    index++;
    
    while(command !== "Adopted") {

        let dogFoodPerDay = Number(command);

        finalFoodinGram += dogFoodPerDay;

        


        command = input[index];
        index++;
    }

    let diff = Math.abs(FoodKg * 1000 - finalFoodinGram)

    if (FoodKg * 1000 >= finalFoodinGram) {

        console.log(`Food is enough! Leftovers: ${diff} grams.`);

    } else {


        console.log(`Food is not enough. You need ${diff} grams more.`);
    }

    

}
puppyCare(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])
