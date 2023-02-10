function nameGame(input) {

    let index = 0;

    let name = String(input[index]);
    index++;




    let winner = "";
    let maxpoints = Number.MIN_SAFE_INTEGER;

    while (name !== "Stop") {

        let currentPoints = 0;


        for (let i = 0; i < name.length; i++) {


            let points = Number(input[index]);
            index++;
            let varname = name.charCodeAt(i);


            if (varname === points) {

                currentPoints += 10;

            } else {

                currentPoints += 2;
            }

            if (currentPoints >= maxpoints) {

                maxpoints = currentPoints;

                winner = name
            }


        }

       

        name = input[index];
        index++;
    }

    console.log(`The winner is ${winner} with ${maxpoints} points!`)

}
nameGame(["Ivan",
    "73",
    "20",
    "98",
    "110",
    "Ivo",
    "80",
    "65",
    "87",
    "Stop"])
