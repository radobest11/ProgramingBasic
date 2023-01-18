function multiplyBy2 (input) {

    let index = 0;
    
    let num = Number(input[index]);


    

    while (num >= 0) {

        let num = Number(input[index]);

        index++;
        
        let res = num * 2
        

        if (res >= 0) {

            console.log(`Result: ${res.toFixed(2)}`);

        

        } else if (res < 0) {
        
            
            console.log(`Negative number!`);

            

            break;
        }
        

        


        


        
    }

} 
multiplyBy2(["23.43", "12.3245", "0","65.23432", "23", "65", "-12", "-123"])