function computerFirm(input) {

    let countComputer = Number(input[0]);

    let a = 0;
    let b = 0;

    for(let i = 1; i <= countComputer; i++) {

        let model = input[i];
        let rate = model[2];
        let sales = Number(`${model[0]}${model[1]}`);

        switch(rate) {


            case "2" : sales *= 0;
            break;
            
            case "3" : sales *= 0.5;
            break;

            case "4" : sales *= 0.7;
            break;

            case "5" : sales *= 0.85;
            break;

            case "6" : sales *= 1;
            break;
            
        }

        a += sales;
        b += Number(rate);
    
    }
    console.log(a.toFixed(2))
    console.log((b/countComputer).toFixed(2));
    
}

computerFirm(["3",
"103",
"103",
"103"])
