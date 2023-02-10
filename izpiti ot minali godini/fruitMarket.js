function fruitMarket (arg0, arg1, arg2, arg3, arg4) {

    let priceQgodi = Number(arg0);
    let bananiKg = Number(arg1);
    let poryokaliKg = Number(arg2);
    let maliniKg = Number(arg3);
    let qgodiKg = Number(arg4);

    let priceMalini = 0.5 * priceQgodi;
    let pricePortokali = 0.6 * priceMalini;
    let priceBanani = 0.2 * priceMalini;

    let finalPrice = priceQgodi * qgodiKg + priceBanani * bananiKg + pricePortokali * poryokaliKg + priceMalini * maliniKg

    console.log(finalPrice.toFixed(2))
}
fruitMarket("48" ,"10" ,"3.3" ,"6.5" ,"1.7")


