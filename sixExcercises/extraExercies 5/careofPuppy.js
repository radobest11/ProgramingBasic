function careOfPuppy (input) {

let index = 0;

let foodInKg = Number(input[index]);
index++;

let foodEaten = 0;

foodInKg = foodInKg * 1000;

let command = input[index];
index++;

while(command !== "Adopted"){

    let foodPerDay = Number(command);

    foodEaten += foodPerDay;

    




    command = input[index];
    index++;


}

let diff = Math.abs(foodInKg - foodEaten)

if (foodInKg >= foodEaten){

    console.log(`Food is enough! Leftovers: ${diff} grams.`);

} else {

    console.log(`Food is not enough. You need ${diff} grams more.`)
}

}
careOfPuppy(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])


