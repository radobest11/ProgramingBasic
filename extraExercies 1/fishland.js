function fishland(input) {

    let priceSkumria = Number(input[0]);

    let priceCaca = Number(input[1]);

    let kgPalamud = Number(input[2]);

    let kgSafrid = Number(input[3]);

    let kgMidi = Number(input[4]);

    let pricePalamud = 1.6 * priceSkumria ;

    let priceSafrid = 1.8 * priceCaca;
    
    let priceMidi = 7.5;

    let res = (pricePalamud * kgPalamud) + (priceSafrid * kgSafrid) + (priceMidi * kgMidi)

    console.log(res.toFixed(2));


}
fishland(["6.9",
"4.2",
"1.5","2.5",
"1"])