function renovation(input) {


    let index = 0;

    let high = Number(input[index]);
    index++;

    let width = Number(input[index]);
    index++;

    let perWithoutPainting = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let finishWork = 0;
    let totalFinalPaint = 0;
    let counter = 0;

    while (command !== "Tired!") {



        let paint = Number(command);

        let totalPaint = high * width * 4;
        let finalPaint = totalPaint * perWithoutPainting / 100;
        totalFinalPaint = Math.ceil(totalPaint - finalPaint);

        finishWork += totalFinalPaint - (totalFinalPaint - paint);
        totalFinalPaint -= finishWork;


        counter += paint;

        if (totalFinalPaint <= 0) {

            break;
        }

        command = input[index];
        index++;




    }
    if (command === "Tired!") {

        if (finishWork > 0) {

            console.log(`${totalFinalPaint} quadratic m left.`)

        }
    }
    if (totalFinalPaint === 0) {

        console.log(`All walls are painted! Great job, Pesho!`);

    } else if (totalFinalPaint <= 0) {

        console.log(`All walls are painted and you have ${Math.abs(totalFinalPaint)} l paint left!`)
    }


}



renovation(["2",
"3",
"25",
"6",
"7",
"8"])
