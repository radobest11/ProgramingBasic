function fitnessCenter(input) {

    let index = 0;


    let visitors = Number(input[index]);

    index++;

    let counterback = 0;
    let counterchest = 0;
    let counterlegs = 0;
    let counterabs = 0;
    let counterProteinBar = 0;
    let counterProteinShaker = 0;
    let trainders = 0;
    let protein = 0;



    for (let i = 1; i <= visitors; i++) {



        let activity = input[index];
        index++;

        if (activity === "Back") {

            counterback++;

        } else if (activity === "Chest") {

            counterchest++;

        } else if (activity === "Legs") {

            counterlegs++;

        } else if (activity === "Abs") {

            counterabs++;

        } else if (activity === "Protein shake") {

            counterProteinShaker++;

        } else {

            counterProteinBar++;
        }





        if (activity === "Back" || activity === "Chest" || activity === "Legs" || activity === "Abs") {

            trainders = (counterback + counterchest + counterlegs + counterabs) / visitors * 100;

        } else {

            protein = (counterProteinBar + counterProteinShaker) / visitors * 100
        }

    }




    console.log(`${counterback} - back`);
    console.log(`${counterchest} - chest`);
    console.log(`${counterlegs} - legs`);
    console.log(`${counterabs} - abs`);
    console.log(`${counterProteinShaker} - protein shake`);
    console.log(`${counterProteinBar} - protein bar`);



    console.log(`${trainders.toFixed(2)}% - work out`);
    console.log(`${protein.toFixed(2)}% - protein`)

}
fitnessCenter(["10",
"Back",
"Chest",
"Legs",
"Abs",
"Protein shake",
"Protein bar",
"Protein shake",
"Protein bar",
"Legs",
"Abs"])
