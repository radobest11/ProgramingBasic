function highJump(input) {

    let index = 0;

    let targetPosition = Number(input[index]);
    
    let currentJump = 0;



    let startPositon = targetPosition - 30;


    let notSuccesJump = 0;


    let counter = 0;




    while (startPositon <= targetPosition) {

        index++;

        currentJump = Number(input[index]);
        


        counter++;




        if (currentJump > startPositon) {

            startPositon += 5;

            notSuccesJump = 0;

        } else {

            notSuccesJump++;



        }





        

        if (notSuccesJump === 3) {
           

            console.log(`Tihomir failed at ${startPositon}cm after ${counter} jumps.`);
            return;
        }

        
    }


    console.log(`Tihomir succeeded, he jumped over ${targetPosition}cm after ${counter} jumps.`);




}
highJump(["250",
"225",
"224",
"225",
"228",
"231",
"235",
"234",
"235"])
