function equalPairs (input) {

    let index = 0; 

    let countPairs = Number(input[index]);
    index++;

    
    let diff = 0;
    let maxdiff = 0;

    

    let sum = Number(input[1]) + Number(input[2]);
   
   
    
    

    for(let i = 3; i <= countPairs * 2; i+=2) {

        let firstCount = Number(input[i]);
        let secondCount = Number(input[i+1]);

        let tempSum = firstCount + secondCount;


        

                
       if (sum !== tempSum) {

            diff = Math.abs(sum - tempSum);

            if (diff > maxdiff) {

             maxdiff = diff;

            }
        }
        sum = tempSum;
    }
       
        
        
    
        
    
    

    if (maxdiff === 0) {

        console.log(`Yes, value=${sum}`)
    } else {

        console.log(`No, maxdiff=${maxdiff}`)
    }
    

    
}
equalPairs(["1", "5", "5"])

