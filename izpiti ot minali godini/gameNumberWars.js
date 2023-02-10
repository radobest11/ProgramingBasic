function gameNumberWars(input) {

    let index = 0;

    let firstName = input[index];
    index++;

    let secondName = input[index];
    index++;

    let command = input[index];
    index++;

    let counterFirst = 0;
    let counterSecond = 0;

    while (command !== "End of game") {

        let firstPoint = Number(command);
        let secondPoints = Number(input[index]);
        index++;
       

       
        


        if (firstPoint > secondPoints) {

            counterFirst += firstPoint - secondPoints;

        } else if (secondPoints > firstPoint) {

            counterSecond += secondPoints - firstPoint;

        } else {

            console.log(`Number wars!`);

            firstPoint = input[index];
            index++;
            secondPoints = input[index];
            index++;

            if (firstPoint > secondPoints) {

                

                
                console.log(`${firstName} is winner with ${counterFirst} points`);
                return;

            } else if (secondPoints > firstPoint) {

                
                

               
                console.log(`${secondName} is winner with ${counterSecond} points`);
                return;

            }


            



        }



        command = input[index];
        index++;


    }

    console.log(`${firstName} has ${counterFirst} points`);
    console.log(`${secondName} has ${counterSecond} points`)


}gameNumberWars(["Desi",
"Niki",
"7",
"5",
"3",
"4",
"3",
"3",
"5",
"3"])
