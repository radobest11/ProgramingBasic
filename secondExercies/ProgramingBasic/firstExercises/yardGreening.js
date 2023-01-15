function yardGreening (input) {

    let ground = Number (input[0]);


    let price1meter = 7.61;
    let price = ground * price1meter;
    let discount = price * (18/100);
    let finalPrice = price - discount;

    console.log(`The final price is: ${finalPrice} lv. 
    The discount is: ${discount} lv.`)




}

    yardGreening(["150"])

