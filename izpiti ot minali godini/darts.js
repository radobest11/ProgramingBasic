function darts (input) {


    let index = 0;

    let playerName = input[index];
    index++;

    let startPoint = 301;

    let succesfull = 0;
    let unseccessfull = 0;

    let command = input[index];

    index++;

    while(command !== "Retire") {

        let tempCommand = command;
        let tempPoints = Number(input[index]);
        index++;
        

        if(tempCommand === "Triple") {

            tempPoints = 3 * tempPoints;

        } else if (tempCommand === "Double") {

            tempPoints = 2 * tempPoints;

        } else {

            tempPoints = tempPoints;
        }

        if (tempPoints <= startPoint) {

            succesfull++;

            startPoint -= tempPoints;

        } else {

            unseccessfull++;
        }

        if (startPoint === 0) {

            break;

        }

       
        command = input[index];
        index++;
        
    }

    if (startPoint === 0) {

        console.log(`${playerName} won the leg with ${succesfull} shots.`);

    } else {

        console.log(`${playerName} retired after ${unseccessfull} unsuccessful shots.`)
    }
}

darts([
"Rob Cross",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"20",
"Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"])




//(["Michael van Gerwen" ,"Triple" ,"20" ,"Triple" ,"19" ,"Double" ,"10" ,"Single" ,"3" ,"Single" ,"1" ,"Triple" ,"20" ,"Triple", "20" ,"Double" ,"20"])

