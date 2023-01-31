function happyCatParking (input) {


    let countDay = Number(input[0]);

    let countHours = Number(input[1]);


    let totalPrice = 0;


    for (let a = 1; a <= countDay; a++) {

        let price = 0;

        for (let b = 1; b <= countHours; b++) {

            if (a % 2 === 0 && b % 2 !== 0) {

                price += 2.5;

            } else if (a % 2 !== 0 && b % 2 === 0) {

                price += 1.25;

            } else {

                price += 1;
            }
            
        }

        console.log(`Day: ${a} - ${price.toFixed(2)} leva`);

        totalPrice += price;
    }

    console.log(`Total: ${totalPrice.toFixed(2)} leva`)
}
happyCatParking(["5", "2"])