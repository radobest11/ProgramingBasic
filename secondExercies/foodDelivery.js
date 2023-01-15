function foodDelivery (input) {

    let chicken = Number(input[0]);

    let fish = Number(input[1]);

    let vegeterian = Number(input[2]);

    let desert = (chicken * 10.35 + fish * 12.4 + vegeterian * 8.15) * 0.2;

    let totalAmount = chicken * 10.35 + fish * 12.4 + vegeterian * 8.15 + desert + 2.5;

    console.log(totalAmount);


}

foodDelivery(["9 ",
"2 ",
"6 "]

)