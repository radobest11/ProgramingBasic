function divisionWithoutRemainder (input) {

    let index = 0;

    let n = Number(input[index]);

    index++;

    let countP1 = 0;
    let countP2 = 0;
    let countP3 = 0;



    for(let i = 1; i <= n; i++) {

        let currentNumber = Number(input[index]);
        index++;


        if (currentNumber % 2 === 0){

            countP1++;

        } 
         if( currentNumber % 3 === 0){

            countP2++;

        } 
        if ( currentNumber % 4 === 0) {

            countP3++;
        }



    }

    let countP1Per = countP1 / n * 100;
    let countP2Per = countP2 / n * 100;
    let countP3Per = countP3 / n * 100;

    console.log(countP1Per.toFixed(2) + "%");
    console.log(countP2Per.toFixed(2) + "%");
    console.log(countP3Per.toFixed(2) + "%")
}
divisionWithoutRemainder(["3",
"3",
"6",
"9"])
