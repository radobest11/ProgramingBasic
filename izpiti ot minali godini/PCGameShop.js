function PCGameShop(input) {

    let index = 0;


    let sells = Number(input[index]);
    index++;

    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;


    for (let i = 1; i <= sells; i++) {


        let name = input[index];
        index++;


        switch (name) {


            case "Hearthstone":
                counter1++;
                break;

            case "Fornite":
                counter2++;
                break;

            case "Overwatch":
                counter3++;
                break;

            default:
                counter4++;
                break;



        }



    }

    let count1P = counter1 / sells * 100;
    let count2P = counter2 / sells * 100;
    let count3P = counter3 / sells * 100;
    let count4P = counter4 / sells * 100;

    console.log(`Hearthstone - ${count1P.toFixed(2)}%`);
    console.log(`Fornite - ${count2P.toFixed(2)}%`);
    console.log(`Overwatch - ${count3P.toFixed(2)}%`);
    console.log(`Others - ${count4P.toFixed(2)}%`)
}
PCGameShop(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])
