function bestPlayer (input) {


    let index = 0;

    let name = input[index];
    index++;

    let goals = Number(input[index]);
    index++;

    let totalGoals = goals;

    let topFofotballer = name;

    
    while(input[index] !== "END"){

        let currentName = input[index];
        index++;
        
        let currentGoals = Number(input[index]);
        index++;

        if(currentGoals > totalGoals) {

            totalGoals = currentGoals;
            topFofotballer = currentName;
        }

        if(totalGoals >= 10) {

            console.log(`${topFofotballer} is the best player!`);
            console.log(`He has scored ${totalGoals} goals and made a hat-trick !!!`);
            
            return;
            

        }
        

    }
    
   

    console.log(`${topFofotballer} is the best player!`);
        

    

        

    


        
    if (totalGoals >= 3) {

        console.log(`He has scored ${totalGoals} goals and made a hat-trick !!!`);


    } else {
        console.log(`He has scored ${totalGoals} goals.`)

    }
        

}
bestPlayer(["Petrov",
"2",
"Drogba",
"11"])


