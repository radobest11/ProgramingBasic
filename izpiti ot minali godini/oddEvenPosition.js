function oddEvenPosition(input) {


    let index = 0;

    let summChetni = 0;

    let sumNechetni = 0;

    let finalNumber = Number(input[index]);
    index++;
    let MinChetno = Number.MAX_SAFE_INTEGER;
    let MaxChetno = Number.MIN_SAFE_INTEGER;
    let MinNeChetno = Number.MAX_SAFE_INTEGER;
    let MaxNeChetno = Number.MIN_SAFE_INTEGER;




    for (let i = 1; i <= finalNumber; i++) {

        let num = Number(input[index]);
        index++;




        if (i % 2 === 0) {

            summChetni += num;

            if (num > MaxChetno) {

                MaxChetno = num;

            }
            if (num < MinChetno) {

                MinChetno = num;

            }

        } else if (i % 2 !== 0) {

            sumNechetni += num;

            if (num > MaxNeChetno) {

                MaxNeChetno = num;

            }

            if (num < MinNeChetno) {

                MinNeChetno = num;

            }

        }

    }


    console.log(`OddSum=${sumNechetni.toFixed(2)},`);

    if (sumNechetni == 0) {

        console.log("OddMin=No,");
        console.log("OddMax=No,");

    } else {

        console.log(`OddMin=${MinNeChetno.toFixed(2)},`);
        console.log(`OddMax=${MaxNeChetno.toFixed(2)},`);

    }

    console.log(`EvenSum=${summChetni.toFixed(2)},`);

    if (summChetni == 0) {

        console.log("EvenMin=No,");
        console.log("EvenMax=No");

    } else {

        console.log(`EvenMin=${MinChetno.toFixed(2)},`);
        console.log(`EvenMax=${MaxChetno.toFixed(2)}`);
    }





}
oddEvenPosition(["3", "-1", "-2", "-3"])


