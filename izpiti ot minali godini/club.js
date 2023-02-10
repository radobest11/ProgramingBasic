function club(input) {

   let index = 0;

    let target = Number(input[index]);
    index++;
    

    let command = input[index];
    index++;
    

    let finalPrice = 0;

    let totalTurnvoer = 0;

    while(command !== "Party!"){

        let nameCocktails = String(command);
      
        
        
        

        let countCocktails = Number(input[index]);
        index++;

        let priceCocktail = nameCocktails.length;

        finalPrice = priceCocktail * countCocktails;
        


        if(finalPrice % 2 !== 0) {

            finalPrice *= 0.75;

        } else {

            finalPrice ;
        }

        totalTurnvoer += finalPrice;
 
        if(totalTurnvoer >= target) {

            console.log(`Target acquired.`)

            break;
        }

        
        command = input[index];
        index++;
        

     
    
        
    }

    let diff = Math.abs(target - totalTurnvoer);

    if(totalTurnvoer < target) {

        console.log(`We need ${diff.toFixed(2)} leva more.`)
    }

    
    console.log(`Club income - ${totalTurnvoer.toFixed(2)} leva.`)
}
club(["500",
"Bellini",
"6",
"Bamboo",
"7",
"Party!"])



