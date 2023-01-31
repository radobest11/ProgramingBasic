function carNumber(input) {

    let firstNumber = Number(input[0]);
    let lastNumber = Number(input[1]);

    let buff = ""

    for (let a = firstNumber; a <= lastNumber; a++) {

        for (let b = firstNumber; b <= lastNumber; b++) {

            for (let c = firstNumber; c <= lastNumber; c++) {


                for (let d = firstNumber; d <= lastNumber; d++) {


                    if ((d % 2 === 0 && a % 2 !== 0) || (a % 2 === 0 && d % 2 !== 0))  {



                            if (a > d && (b + c) % 2 === 0) {

                            buff += "" + a + b + c + d + " ";

                        }

                    }


                }
            }



        }


    }
    console.log(buff)
}
carNumber(["5", "8"])