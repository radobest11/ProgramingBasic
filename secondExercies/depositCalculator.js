function depositCalculator (input) {

let depositAmount = Number(input[0]);

let timeOfdeposit = Number(input[1]);

let rateOfinterest = Number(input[2])/100;

let amount = depositAmount + timeOfdeposit * ((depositAmount*rateOfinterest)/12);

console.log(amount);



}

depositCalculator(["2350",
"6 ",
"7 "]

)