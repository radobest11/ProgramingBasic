function bill (input) {

    let index = 0;
    let months = Number(input[index]);
    index++;

    let totalElectricity = 0;


    for(let i = 1; i <= months; i++) {

        let monthlyBillElectricy = Number(input[index]);
        index++;
        totalElectricity += monthlyBillElectricy;
        
    }
    
    let waterBIlls = months * 20;
    let internetBIlls = months * 15;
    let otherBills = (totalElectricity + waterBIlls + internetBIlls) * 1.2;

    let avarage = (otherBills + internetBIlls + waterBIlls + totalElectricity) / months;

    console.log(`Electricity: ${totalElectricity.toFixed(2)} lv`);
    console.log(`Water: ${waterBIlls.toFixed(2)} lv`);
    console.log(`Internet: ${internetBIlls.toFixed(2)} lv`);
    console.log(`Other: ${otherBills.toFixed(2)} lv`);
    console.log(`Average: ${avarage.toFixed(2)} lv`)
    

}
bill(["5", "68.63", "89.25", "132.53", "93.53", "63.22"])