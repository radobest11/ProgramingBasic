function bestPlayer(input) {


    let index = 0;

   
    let theBest = "";
    let mostGoals = Number.MIN_SAFE_INTEGER;


    while (input[index] !== "END") {

      

       let tempName = input[index];
       
        
       let tempGoals = Number(input[index+1]);
      


        if (tempGoals > mostGoals) {

            mostGoals = tempGoals;
            theBest = tempName;

        }



        if (mostGoals >= 10) {

            break;
        }

       
       index ++;
       index++;
      


    }

    

    console.log(`${theBest} is the best player!`);
    
    

    if (mostGoals >= 3) {

       

        console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);



    } else {

        console.log(`He has scored ${mostGoals} goals.`);
    }


}
bestPlayer
(["Petrov",
"2",
"Drogba",
"11"])