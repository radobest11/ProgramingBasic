function deerOfSanta(input) {


    let days = Number(input[0]);
    let foodInKG = Number(input[1]);
    let deer1 = Number(input[2]);
    let deer2 = Number(input[3]);
    let deer3 = Number(input[4]);

    let foodDear1 = days * deer1;
    let foodDeer2 = days * deer2;
    let foodDeer3 = days * deer3;

    let totalFood = foodDear1 + foodDeer2 + foodDeer3;

    let diff = Math.abs(totalFood - foodInKG)

    if (totalFood <= foodInKG) {

        console.log(`${Math.floor(diff)} kilos of food left.`);

    } else {

        console.log(`${Math.ceil(diff)} more kilos of food are needed.`)
    }
    
}
deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])
