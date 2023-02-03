function oscars (input) {

    let index = 0;

    let nameActor = input[index];

    index++;

    let startPoints = Number(input[index]);

    index++;

    let juryCount = input[index];

    index++;

    for (let i = 0; i < juryCount; i++) {

        let name = input[index];
        index++;

        let jurryPoints = Number(input[index]);

        index++;

        let points = name.length * jurryPoints / 2

        startPoints += points;

        

        if (startPoints > 1250.5) {

            console.log (`Congratulations, ${nameActor} got a nominee for leading role with ${startPoints.toFixed(1)}!`);

            break;

        } 
    }
        

    let diff = 1250.5 - startPoints;

    if ( startPoints < 1250.5) {

        console.log (`Sorry, ${nameActor} you need ${diff.toFixed(1)} more!`);

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
