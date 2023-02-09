function barcodeGenerator (input) {

    let numA = Number(input[0]) + "";
    let numB = Number(input[1]) + "";
    
    
    let x1 = numA[0];
    let x2 = numA[1];
    let x3 = numA[2];
    let x4 = numA[3];
    
    let y1 = numB[0];
    let y2 = numB[1];
    let y3 = numB[2];
    let y4 = numB[3];
    
    let buff = ""
    
    for(let a = x1; a <= y1; a++ ){
    
        for(let b = x2; b <= y2; b++){
    
            for(let c = x3; c <= y3; c++){
    
                for(let d = x4; d <= y4; d++){
    
                    
    
                    if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0){
    
                        buff += "" + a + b + c + d + " "
                    }
                }
            }
        }
    }
    
    console.log(buff)
    
    
}
barcodeGenerator(["3256", "6579"])
