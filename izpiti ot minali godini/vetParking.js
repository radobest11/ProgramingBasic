function vetParking(input) {

    let index = 0;

    let days = Number(input[index]);
    index++;

    let hours = Number(input[index]);
    index++;

    let totalPrice = 0;


    for (let i = 1; i <= days; i++) {

        let price = 0;


        for (let a = 1; a <= hours; a++) {



            if (i % 2 === 0 && a % 2 !== 0) {

                price += 2.5;

            } else if (i % 2 !== 0 && a % 2 === 0) {

                price += 1.25;

            } else {

                price += 1;
            }

        }

        console.log(`Day: ${i} - ${price.toFixed(2)} leva`);

        totalPrice += price;
    }

    console.log(`Total: ${totalPrice.toFixed(2)} leva`)

}
vetParking(["5",
"2"])
