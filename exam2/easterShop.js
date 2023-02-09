function easterShop(input) {


    let index = 0;

    let startCountEggs = Number(input[index]);
    index++;

    let command = input[index];
    index++;


    let countBuy = 0;

    while (command !== "Close") {

        let tempCommand = command;

        let tempQuantity = Number(input[index]);
        index++;

        if (tempCommand === "Buy") {



            if (tempQuantity <= startCountEggs) {

                startCountEggs -= tempQuantity;
                countBuy += tempQuantity;




            } else {



                console.log(`Not enough eggs in store!`);
                console.log(`You can buy only ${startCountEggs}.`);


                break;


            }
        } else if (tempCommand === "Fill") {

            startCountEggs += tempQuantity;

        }

        command = input[index];
        index++;
    }

    if (command === "Close") {
        console.log(`Store is closed!`);
        console.log(`${countBuy} eggs sold.`);

    }

}


easterShop(["50" ,"Buy" ,"23" ,"Fill" ,"51" ,"Buy" ,"45" ,"Buy" ,"4" ,"Buy" ,"20" ,"Buy" ,"20"])





