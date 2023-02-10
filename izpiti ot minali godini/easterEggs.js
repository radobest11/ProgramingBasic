function easterEggs (input) {

    let index = 0;

    let countEggs = Number(input[index]);
    index++;

    let counterRedEggs = 0;
    let counterOrangeEggs = 0;
    let counterBlueEggs = 0;
    let counterGreenEggs = 0;
    let maxCount = Number.MIN_SAFE_INTEGER;
    let color = "";



    for(let i = 1; i <= countEggs; i++) {

        let colorEggs = input[index];
        index++;


        switch(colorEggs) {

            case "red" : counterRedEggs++; 

            if (counterRedEggs > maxCount) {

                maxCount = counterRedEggs;
                color = "red"  
            }
                     
            
            break;
            
            case "orange" : counterOrangeEggs++;

            if (counterOrangeEggs > maxCount){


                maxCount = counterOrangeEggs;
                color = "orange"
            }
           
            
            break;

            case "blue" : counterBlueEggs++;

            if (counterBlueEggs > maxCount) {
                maxCount = counterBlueEggs;
                color = "blue";
            }
            
            
            break;

            case "green" : counterGreenEggs++;
            if (counterGreenEggs > maxCount) {
            maxCount = counterGreenEggs;
            color = "green";
            }
            
            
            break;

        }


    }

    console.log(`Red eggs: ${counterRedEggs}`);
    console.log(`Orange eggs: ${counterOrangeEggs}`);
    console.log(`Blue eggs: ${counterBlueEggs}`);
    console.log(`Green eggs: ${counterGreenEggs}`);
    console.log(`Max eggs: ${maxCount} -> ${color}`)

    

   

}
easterEggs(["4" ,"blue" ,"red" ,"blue" ,"orange"])

