function examPreparation(input) {

    let index = 0;

    let broiNezadovolitelniOcenki = Number(input[index]);

    index++;

    let countZadovolitelniOcenki = 0;
    let countNezadovolitelniOcenki = 0;
    let sumTotalOcenki = 0;
    let lastZadacha;
    let avarageOcenki = 0;



    while (input[index] !== "Enough") {


        let currentPredmet = input[index];
        index++;
        let currentOcenka = Number(input[index]);
        index++;
        lastZadacha = currentPredmet;

        if (currentOcenka <= 4) {

            countNezadovolitelniOcenki++;
            sumTotalOcenki += currentOcenka;

        } else {


            countZadovolitelniOcenki++;
            sumTotalOcenki += currentOcenka;
            

        }

        

        

        if (countNezadovolitelniOcenki === broiNezadovolitelniOcenki) {

            console.log(`You need a break, ${countNezadovolitelniOcenki} poor grades.`);
            return;

        }

        avarageOcenki = sumTotalOcenki / (countZadovolitelniOcenki + countNezadovolitelniOcenki);


    }

    console.log(`Average score: ${avarageOcenki.toFixed(2)}`);
    console.log(`Number of problems: ${countNezadovolitelniOcenki + countZadovolitelniOcenki}`);
    console.log(`Last problem: ${lastZadacha}`);

}
examPreparation(["4" ,"Stone Age" ,"5" ,"Freedom" ,"5" ,"Storage" ,"3" ,"Enough"])
