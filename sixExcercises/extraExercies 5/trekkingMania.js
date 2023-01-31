function trekkingMania (input){

    let index = 0;

    let countGroup = Number(input[index]);
    index++;

    let peopleMusala = 0;
    let peopleMonblan = 0;
    let peopleKilimandjaro = 0;
    let peopleK2 = 0;
    let peopleEverest = 0;


    for(let i = 1; i <= countGroup; i++){

        let countPeople = Number(input[index]);
        index++;

        if(countPeople <= 5) {

            peopleMusala += countPeople;

        } else if (countPeople >= 6 && countPeople <= 12){

            peopleMonblan += countPeople;

        } else if (countPeople >= 13 && countPeople <= 25){

            peopleKilimandjaro += countPeople;

        } else if (countPeople >= 26 && countPeople <= 40){

            peopleK2 += countPeople;

        } else {

            peopleEverest += countPeople;
        }

    }

    let totalPeople = peopleEverest + peopleK2 + peopleKilimandjaro + peopleMonblan + peopleMusala;

    let MusalaP = peopleMusala / totalPeople * 100;
    let MonblanP = peopleMonblan / totalPeople * 100;
    let KilimandjaroP = peopleKilimandjaro / totalPeople * 100;
    let K2P = peopleK2 / totalPeople * 100;
    let everestP = peopleEverest / totalPeople * 100;

    console.log(`${MusalaP.toFixed(2)}%`);
    console.log(`${MonblanP.toFixed(2)}%`);
    console.log(`${KilimandjaroP.toFixed(2)}%`);
    console.log(`${K2P.toFixed(2)}%`);
    console.log(`${everestP.toFixed(2)}%`);



}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
