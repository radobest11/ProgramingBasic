function cinema(input) {

    let projection = input[0];

    let row = Number(input[1]);

    let column = Number(input[2]);

    let turnover = row * column;



    switch (projection) {

        case "Premiere" : turnover = 12 * turnover; break;
        
        case "Normal" : turnover = 7.5 * turnover; break;

        case "Discount" : turnover = 5 * turnover; break;

    }

    console.log(`${turnover.toFixed(2)} leva`);

}

cinema(["Discount",
"12",
"30"])


