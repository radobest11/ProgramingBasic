function sumofTwoNumbers(input) {


    let startInterval = Number(input[0]);
    let lastInterval = Number(input[1]);
    let magicNumber = Number(input[2]);


    let counter = 0;

    let isMagic = false;

    for (let i = startInterval; i <= lastInterval; i++) {

        if (isMagic === false) {

            for (let a = startInterval; a <= lastInterval; a++) {

                counter++;

                if (i + a === magicNumber) {

                    isMagic = true;




                    console.log(`Combination N:${counter} (${i} + ${a} = ${magicNumber})`);
                    break;




                }




            }


        }





        if (isMagic === true) {

            isMagic === true;

            break;


        } else {

            isMagic === false;

            continue;
        }



    }



    if (isMagic === false) {

        console.log(`${counter} combinations - neither equals ${magicNumber}`);

    }




}
sumofTwoNumbers(["88", "888", "1000"])