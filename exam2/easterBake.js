function easterBake(input) {

    let index = 0


    let countKozunaci = Number(input[index]);
    index++;

    let totalSugar = 0;

    let totalFlavour = 0;
    let maxSugar = Number.MIN_SAFE_INTEGER;
    let maxFlavour = Number.MIN_SAFE_INTEGER;


    for (i = 1; i <= countKozunaci * 2; i ++) {

        

        let tempCommand = Number(input[index]);
        index++;


        if (i % 2 !== 0){

            totalSugar += tempCommand;

            if(maxSugar < tempCommand) {

                maxSugar = tempCommand;

            }
            

        } else {

            totalFlavour += tempCommand;

            if(maxFlavour < tempCommand) {

                maxFlavour = tempCommand;
            }
            
        }    
     
            
        
    }

    let countPackeSugar = totalSugar / 950;
    let countPacketFlavour = totalFlavour / 750;
   
    console.log(`Sugar: ${Math.ceil(countPackeSugar)}`);
    console.log(`Flour: ${Math.ceil(countPacketFlavour)}`);
    console.log(`Max used flour is ${maxFlavour} grams, max used sugar is ${maxSugar} grams.`)

}
easterBake(["4",
"500",
"350",
"560",
"430",
"600",
"345",
"578",
"543"])

