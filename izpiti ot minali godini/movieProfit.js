function movieProfit (input) {

    let name = input[0];
    let countDay = Number(input[1]);
    let countTickets = Number(input[2]);
    let priceTickets = Number(input[3]);
    let PerForCinema = Number(input[4]);


    let finalPrice = countDay * countTickets * priceTickets;

    let totalFinalPrice = finalPrice - (finalPrice*PerForCinema)/100;

    console.log(`The profit from the movie ${name} is ${totalFinalPrice.toFixed(2)} lv.`)
}
movieProfit(["Python Basics",
"40",
"34785",
"10.45",
"14"])
