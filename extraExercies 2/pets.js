function pets (input) {

    let day = Number(input[0]);

    let totalFoodKg = Number(input[1]);

    let dogFoodKg = Number(input[2]);

    let catFoodKg = Number(input[3]);

    let turtleFoodGram = Number(input[4]);


    let dog = dogFoodKg * day;

    let cat = catFoodKg * day;

    let turtle = (turtleFoodGram * day) / 1000;

    let totalFoodNeccessaryKG = dog + cat + turtle;

    let diff = Math.abs (totalFoodNeccessaryKG - totalFoodKg);

    if (totalFoodNeccessaryKG <= totalFoodKg) {

        console.log(`${Math.floor(diff)} kilos of food left.`);


    } else {

        console.log (`${Math.ceil(diff)} more kilos of food are needed.`);

    }

} 
pets(["2",
"10",
"1","1", "1200"])