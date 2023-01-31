function lettersCombinations (input){


    let firstA = input[0];
    let lastZ = input[1];
    let missedBukva = input[2];
    let count = 0;
    let printline = "";
    let a1 = firstA.charCodeAt(0);
    let b1 = lastZ.charCodeAt(0);
    let c1 = missedBukva.charCodeAt(0);




    for(let a = a1; a <= b1; a++){

        if (a === c1){

            continue;
        }

        for(let b = a1; b <= b1; b++) {

            if(b === c1) {

                continue;
            }

            for(let c = a1; c <= b1; c++){

                if(c === c1) {

                    continue;
                }

                count++;
                printline += "" + String.fromCharCode(a) + String.fromCharCode(b) + String.fromCharCode(c) + " "
            }
        }
    }
    console.log(printline + count)

}
lettersCombinations(["a", "c", "z"])