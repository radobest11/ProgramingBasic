function multiplyTable(input) {


    let num = input[0];


    for (let a = 1; a <= +num[2]; a++){
        for(let b = 1; b <= +num[1] ; b++){
            for (let c = 1; c <= +num[0] ; c++){

                let res = a*b*c;
                console.log(`${a} * ${b} * ${c} = ${res};`)

                


            }
        }
    }
    
}
multiplyTable(["234"])