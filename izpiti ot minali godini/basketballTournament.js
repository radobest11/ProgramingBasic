function basketballTournament(input) {

    let index = 0;

    let name = input[index];
    index++;

    let winMatch = 0;
    let loseMatch = 0;
    
    let totalMatch = 0;

    while (name !== "End of tournaments") {

        let countMatchInTurnir = Number(input[index]);
        index++;

        let count = 0;

        

        let diff = 0;
        for (let i = 1; i <= countMatchInTurnir; i++) {

            let pointsDessi = Number(input[index]);
            index++;
            let otherPoints = Number(input[index]);
            index++;
            totalMatch++;

            if (pointsDessi > otherPoints) {

                count++;
                winMatch++;

                diff = Math.abs(pointsDessi - otherPoints);

                console.log(`Game ${count} of tournament ${name}: win with ${diff} points.`)

            } else if (pointsDessi < otherPoints) {

                count++;
                loseMatch++;

                diff = Math.abs(pointsDessi - otherPoints);

                console.log(`Game ${count} of tournament ${name}: lost with ${diff} points.`)


            }
            
            
        }

        name = input[index];
        index++;
       
    }

    
    let winP = winMatch / totalMatch * 100 ;
    let loseP = loseMatch / totalMatch * 100;

    console.log(`${winP.toFixed(2)}% matches win`);
    console.log(`${loseP.toFixed(2)}% matches lost`)



}



basketballTournament(["Ballers",
"3",
"87",
"63",
"56",
"65",
"75",
"64",
"Sharks",
"4",
"64",
"76",
"65",
"86",
"68",
"99",
"45",
"78",
"End of tournaments"])
