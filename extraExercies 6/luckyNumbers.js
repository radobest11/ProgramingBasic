function luckyNumbers(input) {


    let num = Number(input[0]);

    let buff = ""

    for (let a = 1; a < 10; a++) {




        for (let b = 1; b < 10; b++) {




            for (let c = 1; c < 10; c++) {




                for (let d = 1; d < 10; d++) {




                    if (a + b === c + d && num % (a + b) === 0){

                                          

                        buff += "" + a + b + c + d + " ";


                       

                        





                    }
                }
            }
        }
    }




    console.log(buff)

}


luckyNumbers(["24"])