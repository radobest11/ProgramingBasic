function exursion(input) {

    let countPeople = Number(input[0]);

    let countNights = Number(input[1]);

    let numberOfCards = Number(input[2]);

    let ticketOfMuseum = Number(input[3]);
    
    let priceForNights = countNights * 20;

    let priceOfCards = numberOfCards * 1.6;

    let PriceOfMuseum = ticketOfMuseum * 6;

    let totalPrice = priceForNights + priceOfCards + PriceOfMuseum;


    let finalPrice = totalPrice * countPeople * 1.25;

    console.log(finalPrice.toFixed(2))
}
exursion(["131",
"9",
"33",
"46"])

