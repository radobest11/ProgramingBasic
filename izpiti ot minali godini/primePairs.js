function primePairs(input) {

    let index = 0;


    let num1 = Number(input[index]);
    index++;

    let num2 = Number(input[index]);
    index++;

    let endNum1 = Number(input[index]);
    index++;

    let endNum2 = Number(input[index]);
    index++;

    let finalNum1 = num1 + endNum1;
    let finalNum2 = num2 + endNum2;




    for (let i = num1; i <= finalNum1; i++) {


        for (let b = num2; b <= finalNum2; b++) {

            let isPrimeNum1 = true;

            let isPrimeNum2 = true;


            for (let k = 2; k <= Math.sqrt(i); k++) {



                if (i % k == 0) {

                    isPrimeNum1 = false;

                    break;
                }


            }

            for (let k = 2; k <= Math.sqrt(b); k++) {


                if (b % k == 0) {

                    isPrimeNum2 = false;
                    break;
                }
            }



            if (isPrimeNum1 && isPrimeNum2) {

                console.log(`${i}${b}`)

            }
            

        }
    }





}
primePairs(["10", "20", "5", "5"])