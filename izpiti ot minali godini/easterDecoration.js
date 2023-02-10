function easterDecoration(input) {

    let index = 0;

    let numberOfClients = Number(input[index]);
    index++;

    let avarage = 0;

    for (let i = 1; i <= numberOfClients; i++) {

        let command = input[index];
        index++;
        let price = 0;
        let counter = 0;

       
        
        while (command !== "Finish") {

            
            

            switch(command){

                case "basket" : price += 1.5;
                counter++ 
                break;
                case "wreath" : price += 3.8; 
                counter++;
                break;
                case "chocolate bunny" : price += 7; 
                counter++;
                break;
            }

            
            

            
                                          
            command = input[index];

            index++;
            

            
            
        }

       

        if (counter % 2 === 0) {

            price *= 0.8;
        }

        avarage += price;
        console.log(`You purchased ${counter} items for ${price.toFixed(2)} leva.`);
        
    }
    
    console.log(`Average bill per client is: ${(avarage/numberOfClients).toFixed(2)} leva.`)
}
easterDecoration([ "2" ,"basket" ,"wreath" ,"chocolate bunny" ,"Finish" ,"wreath" ,"chocolate bunny" ,"Finish"])

