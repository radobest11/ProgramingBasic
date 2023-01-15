function basketballEquipment(input) {

    let tax = Number(input[0]);

    let snickers = tax * 0.6;

    let echip = snickers * 0.8;

    let ball = 1 / 4 * echip;

    let accessories = 1/5 * ball;

    let totalCosts = tax + snickers + echip + ball + accessories;

    console.log(totalCosts);



}

basketballEquipment(["550"])