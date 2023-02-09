function paintingEggs(input) {


    let sizeEggs = input[0];
    let colorEggs = input[1];
    let partida = Number(input[2]);

    let price = 0;

    switch (colorEggs) {

        case "Red":

            if (sizeEggs === "Large") {

                price = partida * 16;

            } else if (sizeEggs === "Medium") {

                price = partida * 13;

            } else {

                price = partida * 9;
            }
            break;

        case "Green":

            if (sizeEggs === "Large") {

                price = partida * 12;

            } else if (sizeEggs === "Medium") {

                price = partida * 9;

            } else {

                price = partida * 8;
            }
            break;

        case "Yellow":


            if (sizeEggs === "Large") {

                price = partida * 9;

            } else if (sizeEggs === "Medium") {

                price = partida * 7;

            } else {

                price = partida * 5;
            }
            break;


    }

    let finalPrice = price - (0.35 * price);

    console.log(`${finalPrice.toFixed(2)} leva.`)



}
paintingEggs(["Small",
"Yellow",
"3"])


