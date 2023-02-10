function basketballEquipment (input){


    let annualTaxes = Number(input[0]);

    let kecove = 0.6 * annualTaxes;
    let echip = 0.8 * kecove;
    let topka = 1/4 * echip;
    let accessories = 1/5 * topka;

    let finalPrice = annualTaxes + kecove + echip + topka + accessories;

    console.log(finalPrice.toFixed(2));


}
basketballEquipment(["550"])