function streamOfLetters (input) {

    let index = 0;
    
    let currentSYmbol = input[index];
    index++;
    
    let enoughSymbols = "End";
    
    let finalMessage = "";
    let currentWorld = "";
    
    let secretFirstCpasses = false;
    let secretFirstOpassed = false;
    let secretFirstNpassed = false;
    
    
    
    
    while (currentSYmbol !== enoughSymbols) {
    
    
        if (!(("A" <= currentSYmbol && currentSYmbol <= "Z") || ("a" <= currentSYmbol && currentSYmbol <= "z"))) {
    
            currentSYmbol = input[index];
            index++;
    
            continue;
    
        }
    
    
        switch(currentSYmbol) {
    
    
            case "c" : 
    
            if (secretFirstCpasses) {
    
    
                currentWorld += currentSYmbol;
    
            } else {
    
                secretFirstCpasses = true;
    
    
    
            }
            break;
    
            case "o" : 
    
            if (secretFirstOpassed) {
    
                currentWorld += currentSYmbol;
    
            } else {
    
                secretFirstOpassed = true;
            }
            break;
    
            case "n" :
    
                if(secretFirstNpassed) {
    
                    currentWorld += currentSYmbol;
    
                } else {
    
                    secretFirstNpassed = true;
                }
                break;
    
                default : {
    
                    currentWorld += currentSYmbol;
                }
                break;
    
    
    
        }
    
        if (secretFirstNpassed && secretFirstOpassed && secretFirstCpasses) {
    
    
            currentWorld += " ";
            secretFirstCpasses = false;
            secretFirstNpassed = false;
            secretFirstOpassed = false;
            finalMessage += currentWorld;
            currentWorld = "";
    
        }
    
        currentSYmbol = input[index];
        index++;
    
    }
    
        console.log(finalMessage);
    
    } 

streamOfLetters

////(["%" ,"!" ,"c" ,"^" ,"B" ,"`" ,"o" ,"%" ,"o" ,"o" ,"M" ,")" ,"{" ,"n" ,"\", "A" ,"D","End"])

(["H"
, "n"
, "e"
, "l"
, "l"
, "o"
, "o"
, "c"
, "t"
, "c"
, "h"
, "o"
, "e"
, "r"
, "e"
, "n"
, "e"
, "End"])
