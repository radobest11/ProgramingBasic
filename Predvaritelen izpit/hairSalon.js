function hairSalon (input) {

    let index = 0;

    let currProfit = 0;

    let profit = Number(input[index]);

    let a;
    let b;

    index++;
 

    while (currProfit <= profit) {
        let type = input[index];

        if (type !== 'closed') {
            if (type === 'haircut') {
                a = type;
            }
    
            if (type === 'color') {
                b = type;
            }

            if (a) {
                if (input[index] === "mens") {
                    currProfit += 15;
                }
                if (input[index] === "ladies") {
                    currProfit += 20;
                }
                if (input[index] === "kids") {
                    currProfit += 10;
                }
            }
    
            if (b) {
                if (input[index] === "touch up") {
                    currProfit += 20;
                }
                if (input[index] === "full color") {
                    currProfit += 30;
                }
                
            }

            if (currProfit >= profit) {
                break;
            }
        } else {
            const money = Math.abs(profit - currProfit);

            console.log(`Target not reached! You need ${money}lv. more.`)
            console.log(`Earned money: ${currProfit}lv.`)
            
            break;
        }

        index++; 
    }

    if (currProfit >= profit) {
        console.log(`You have reached your target for the day!`)
        console.log(`Earned money: ${currProfit}lv.`)
    }

    
}
    
    

hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"])


