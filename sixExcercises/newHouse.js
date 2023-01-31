function newHouse (input) {

    let flowers = input[0];

    let countFlowers = Number(input[1]);

    let budget = Number(input[2]);

    let sum = 0;

    switch (flowers) {

        case "Roses" : sum = countFlowers * 5;

        if (countFlowers > 80) {

            sum = sum * 0.9;
        }

        break;

        case "Dahlias" : sum = countFlowers * 3.8;

        if (countFlowers > 90) {

            sum = sum * 0.85;
        }

        break;

        case "Tulips" : sum = countFlowers * 2.8;

        if (countFlowers > 80) {

            sum = sum * 0.85;
        }

        break;

        case "Narcissus" : sum = countFlowers * 3;

        if (countFlowers < 120) {

            sum = sum * 1.15;

        }

        break;

        case "Gladiolus" : sum = countFlowers * 2.5;

        if (countFlowers < 80) {

            sum = sum * 1.2;
        }

        break;

    }
    
    let diff = Math.abs(budget - sum);

    if (budget >= sum) {

        console.log(`Hey, you have a great garden with ${countFlowers} ${flowers} and ${diff.toFixed(2)} leva left.`)
    } else {

        console.log (`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }

}

newHouse(["Narcissus",
"119",
"360"])


