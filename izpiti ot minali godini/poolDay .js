function poolDay (input) {


    let totalPeople = Number(input[0]);

    let taxEntry = Number(input[1]);

    let priceShezlong = Number(input[2]);

    let priceUmbrella = Number(input[3]);

   let shezlong =  Math.ceil(totalPeople * 0.75) * priceShezlong
   let umbrella = Math.ceil(totalPeople / 2) * priceUmbrella


    let finalPrice = totalPeople * taxEntry + shezlong + umbrella

    console.log(`${finalPrice.toFixed(2)} lv.`)


    
   
}
poolDay(["21","5.50","4.40","6.20"])