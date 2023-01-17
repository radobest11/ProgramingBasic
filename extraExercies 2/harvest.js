function harvest(input) {

    let ploshtLozeX = Number(input[0]);

    let grozde1KvMetarY = Number(input[1]);

    let nujniLitriVinoZ = Number(input[2]);

    let broiRabotnici = Number(input[3]);

    let obsthoGrozde = ploshtLozeX * grozde1KvMetarY;

    let ploshtZaVino = (0.4 * obsthoGrozde)/2.5;

    let diff = Math.abs(ploshtZaVino - nujniLitriVinoZ);

    

    if (ploshtZaVino < nujniLitriVinoZ ) {

        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);


    } else if (ploshtZaVino >= nujniLitriVinoZ){

        console.log(`Good harvest this year! Total wine: ${Math.floor(ploshtZaVino)} liters.`);
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(diff / broiRabotnici)} liters per person.`);

    }

}
harvest(["650",
"2",
"175","3"])