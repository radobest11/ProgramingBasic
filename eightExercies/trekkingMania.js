function trekkingMania (input) {

    let index = 0;

    let numberOfGroups = Number(input[index]);
    index++;

    let musala = 0;
    let monblanck = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let total = 0;


    for (let i = 0; i < numberOfGroups; i++){

        let countPeople = Number(input[index]);
        index++;

        total += countPeople;

        if (countPeople <= 5) {

            musala += countPeople;

        } else if (countPeople >= 6 && countPeople <= 12) {

            monblanck += countPeople;

        } else if (countPeople >= 13 && countPeople <= 25) {

            kilimandjaro += countPeople;

        } else if (countPeople >= 26 && countPeople <= 40) {

            k2 += countPeople;

        } else {

            everest += countPeople;


        }

        
    }

        let musalaPer = musala / total * 100;
        let monbalnckPer = monblanck / total * 100;
        let kilimandjaroPer = kilimandjaro / total * 100;
        let k2Per = k2 / total * 100;
        let everesPer = everest / total * 100;

        console.log (musalaPer.toFixed(2) + "%");
        console.log (monbalnckPer.toFixed(2) + "%");
        console.log (kilimandjaroPer.toFixed(2) + "%");
        console.log (k2Per.toFixed(2) + "%");
        console.log (everesPer.toFixed(2) + "%");
}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])
