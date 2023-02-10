function passwordGenerator(input) {

    let index = 0;

    let sym1 = Number(input[index]);
    index++;

    let sym2 = Number(input[index]);
    index++;

    let startAlphabet = 97;


    let finalSym1 = 97 + sym2;

    let buff = ""

    let tempFinalSum1 = "";
    let tempFinalSum2 = "";


    for (let i = 1; i < sym1; i++) {


        for (let a = 1; a < sym1; a++) {

            for (let b = startAlphabet; b < finalSym1; b++) {


                tempFinalSum1 = String.fromCharCode(b)

                for (let c = startAlphabet; c < finalSym1; c++) {


                    tempFinalSum2 = String.fromCharCode(c)



                    for (let d = 2; d <= sym1; d++) {


                        if (d > i && d > a) {

                            buff += "" + i + a + tempFinalSum1.charAt(0) + tempFinalSum2.charAt(0) + d + " ";
                        }


                    }


                }


            }

        }


    }

    console.log(buff)

}
passwordGenerator(["2", "4"])