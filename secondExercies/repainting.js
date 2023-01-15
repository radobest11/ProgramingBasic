function repainting (input) {

    let nylon = 1.5;

    let paint = 14.5;

    let thinner = 5;

    let totalNylon = (Number(input[0]) + 2) * nylon;

    let totalPaint = (paint * Number(input[1])) * 1.1;

    let totalThinner = thinner * Number(input[2]);

    let totalWorkingfor1Hours = ((totalNylon + totalPaint + totalThinner + 0.4) * 0.3) * Number(input[3]);

    let totalCosts = totalNylon + totalPaint + totalThinner + totalWorkingfor1Hours + 0.4;

    console.log(totalCosts)

}

repainting(["5 ",
"10 ",
"10 ",
"1 "]

)