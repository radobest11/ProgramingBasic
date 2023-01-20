function suitcasesLoad(input) {

    let index = 0;

    let totalBagaj = Number(input[index]);

    index++;

    let counter = 0;

    let commandCounter = 0;

    let sumOfOneBagaj = 0;


    let command = input[index];
    index++;

    while (command !== "End") {

       

        let oneBagaj = Number(command);

        commandCounter++;

        


        if (commandCounter % 3 === 0) {


            oneBagaj *= 1.1;
        }

       
        
        sumOfOneBagaj += oneBagaj;
        

        let diff = totalBagaj - (sumOfOneBagaj - oneBagaj);


        if (diff  < oneBagaj ) {

            

            

            break;
        }

        
        
        counter++;
        
        

        command = input[index];
        index++;

       
       
    }

    if (totalBagaj >= sumOfOneBagaj) {

        console.log(`Congratulations! All suitcases are loaded!`);

    } else {

        console.log(`No more space!`);
    }
   


    console.log(`Statistic: ${counter} suitcases loaded.`);

    



}
suitcasesLoad(["700.5",
"180",
"340.6",
"126",
"220"])



