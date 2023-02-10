function oscars (input) {

    let index = 0;

    let nameActor = input[index];
    index++;


    let startPoints = Number(input[index]);
    index++;

    let countOcenki = Number(input[index]);
    index++;

    let finalOcenka = 0;
    let tempOcenka = 0;

    for(let i = 1; i <= countOcenki; i++){


        let nameOcenqvasht = input[index];
        index++;
        let pointsOcenqvasht = Number(input[index]);
        index++;

        tempOcenka += (nameOcenqvasht.length * pointsOcenqvasht) / 2;

        finalOcenka = startPoints + tempOcenka;

        if(finalOcenka >= 1250.5) {

            break;
        }
    }

    let diff = Math.abs(1250.5 - finalOcenka)

    if(finalOcenka >= 1250.5) {

        console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${finalOcenka.toFixed(1)}!`);

    } else {


        console.log(`Sorry, ${nameActor} you need ${diff.toFixed(1)} more!`)
    }

}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
