function movieStars(input) {

    let index = 0;

    let budget = Number(input[index]);
    index++;

    let command = input[index];
    index++;



    while (command !== "ACTION") {


        let actorName = String(command);






        if (actorName.length > 15) {

            budget -= 0.2 * budget;

        } else {

            let salaryActor = Number(input[index]);
            index++;

            budget -= salaryActor;
        }







        if (budget < 0) {


            console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`)

            break;
        }


        command = input[index];
        index++


    }

    if (command === "ACTION") {

        console.log(`We are left with ${budget.toFixed(2)} leva.`);

    } 




}
movieStars(["90000",
    "Christian Bale",
    "70000.50",
    "Leonard DiCaprio",
    "Kevin Spacey",
    "24000.99"])


