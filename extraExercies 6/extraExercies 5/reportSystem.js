function reportSystem(input) {



    let targetAmount = Number(input[0]);

    let counterCard = 0;

    let counterCash = 0;

    let plashtaneScarta = 0;
    let plashtaneVBroi = 0;

    let priceSussesfullCard = 0;
    let priceSuccessfulCash = 0;

    let priceSussesfull = priceSuccessfulCash + priceSussesfullCard;

    let index = 1;

    let command = input[index];
    index++;

    while (command !== "End") {

        counterCard++;
        counterCash++;


        let paidAmount = Number(command);

        if (paidAmount > 100 && counterCard % 2 === 0) {

            priceSussesfullCard += paidAmount;
            plashtaneScarta++;


            console.log(`Product sold!`);

        } else if (paidAmount < 10 && counterCard % 2 !== 0) {

            priceSuccessfulCash += paidAmount;

            plashtaneVBroi++;

            console.log(`Product sold!`);


        } else if (paidAmount >= 10 && paidAmount <= 100 && counterCard % 2 === 0) {


            priceSussesfullCard += paidAmount;
            plashtaneScarta++

            console.log(`Product sold!`);

        } else if (paidAmount >= 10 && paidAmount <= 100 && counterCash % 2 !== 0) {



            priceSuccessfulCash += paidAmount;

            plashtaneVBroi++;

            console.log(`Product sold!`);


        } else {

            console.log(`Error in transaction!`);
        }

        if (priceSussesfullCard + priceSuccessfulCash >= targetAmount) {

            break;
        }



        command = input[index];
        index++;



    }

    if (command === "End") {

        console.log(`Failed to collect required money for charity.`)
    } else {
        console.log(`Average CS: ${(priceSuccessfulCash / plashtaneVBroi).toFixed(2)}`);
        console.log(`Average CC: ${(priceSussesfullCard / plashtaneScarta).toFixed(2)}`);
    }

}
reportSystem(["600", "86", "150", "98", "227", "End"])

