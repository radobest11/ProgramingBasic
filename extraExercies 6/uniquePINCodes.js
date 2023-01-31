function uniquePINCodes(input) {


    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);

    

    for (let i = 2; i <= num1; i+=2) {


        


        for (let a = 2; a <= num2; a++) {

            


            for (let b = 2; b <= num3; b+=2) {


                if (a == "2" || a == "3" || a == "5" || a == "7") {


                    console.log(i + " " + a + " " + b + " ")
               
    
                } 


               

                

            }
        }
        
    }

    

}
uniquePINCodes(["3", "5", "5"])