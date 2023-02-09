function easterBakery (input) {

    let priceFlavor = Number(input[0]);
    let kilogramsFlavor = Number(input[1]);
    let kilogramsSugar = Number(input[2]);
    let countKoriQica = Number(input[3]);
    let packetsMaq = Number(input[4]);

    let priceSugar = 0.75 * priceFlavor;
    let priceKoriQica = 1.1 * priceFlavor;
    let pricePacketMaq = 0.2 * priceSugar;

    let finalPrice = priceFlavor * kilogramsFlavor + kilogramsSugar * priceSugar + countKoriQica * priceKoriQica + packetsMaq * pricePacketMaq;

    console.log(finalPrice.toFixed(2));

}
easterBakery(["63.44",
"3.57",
"6.35",
"8",
"2"])

