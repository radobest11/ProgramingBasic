function vacation(input) {

    let index = 0;


    let targetMoney = Number(input[index]);
    index++;

    let currentMoney = Number(input[index]);
    index++;

    
    let counterSpendDay = 0;

    let totalDay = 0;

    

    while (currentMoney < targetMoney) {

        let command = input[index];
        index++;

        let currentAmount = Number(input[index]);
        index++;

        

        totalDay++;

        if (command === "spend") {

            counterSpendDay++;

            currentMoney -= currentAmount;


        } else {

            currentMoney += currentAmount;
            counterSpendDay = 0;
        }

        if (currentAmount > currentMoney) {

            currentMoney = 0;
        }

        if (counterSpendDay === 5) {

            console.log(`You can't save the money.`);
            console.log(`${totalDay}`);
            break;

        }

        

        
    }


    if (currentMoney >= targetMoney) {

        console.log(`You saved the money for ${totalDay} days.`);
        
    }

}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])



