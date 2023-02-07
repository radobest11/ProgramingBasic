function sumOfTwoNumbers(input) {

    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let magicNumber = Number(input[2]);

    let counterPlus = 0;

    let IsSame = false;




    for (let a = firstNumber; a <= secondNumber; a++) {

        for (let b = firstNumber; b <= secondNumber; b++) {

            counterPlus++;

            if (a + b === magicNumber) {

                console.log(`Combination N:${counterPlus} (${a} + ${b} = ${magicNumber})`);

                IsSame = true;


                break;

            }



        }

        if (IsSame) {

            break;

        }

    }
    if (!IsSame) {


        console.log(`${counterPlus} combinations - neither equals ${magicNumber}`);


    }


}
sumOfTwoNumbers(["1",
"10",
"5"])
