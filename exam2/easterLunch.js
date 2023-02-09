function easterLunch (input) {


    let kozunaci = Number(input[0]);
    let egges = Number(input[1]);
    let cookies = Number(input[2]);
    
    let priceEggsColor = egges * 12 + (egges * 0.15);
    let priceKozunaci = kozunaci * 3.2;
    let priceCookies = cookies * 5.4;
    let priceEggs = egges * 4.35 + (egges * 12 * 0.15);

    let finalPrice = priceKozunaci + priceCookies + priceEggs;

    console.log(finalPrice.toFixed(2))
}
easterLunch(["4",
"4",
"3"])

