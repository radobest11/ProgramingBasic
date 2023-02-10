function safePasswordsGenerator(input) {

    let index = 0;


    let a = Number(input[index]);
    index++;

    let b = Number(input[index]);
    index++;

    let maxPasswords = Number(input[index]);
    index++;

    let count = 0;

    let buff = "";
    let tempA = "";
    let tempB = "";

    let i = 35;
    let d = 64;


    for (let c = 1; c <= a; c++) {

        for (let y = 1; y <= b; y++) {

            tempA = String.fromCharCode(i);

            tempB = String.fromCharCode(d);

            buff += "" + tempA + tempB + c + y + tempB + tempA + "|"

            count++;



            if (count >= maxPasswords) {

                console.log(buff)

                return;
            }

            i++;
            if (i > 55) {

                i = 35;
            }
            d++;

            if (d > 96) {

                d = 64
            }
            
            



        }



    }

    console.log(buff)

}
safePasswordsGenerator(["20", "50", "10"])