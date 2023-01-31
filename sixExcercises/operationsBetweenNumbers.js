function operationsBetweenNumbers(input) {

    let N1 = Number(input[0]);

    let N2 = Number(input[1]);

    let operator = input[2];

    let res = 0;

    if (operator === "+") {

        res = N1 + N2;

        if (res % 2 === 0) {

            console.log (`${N1} + ${N2} = ${res} - even`);

        } else {

            console.log (`${N1} + ${N2} = ${res} - odd`)
        }

        
    } else if (operator === "-") {

        res = N1 - N2;

        if (res % 2 === 0) {

            console.log (`${N1} - ${N2} = ${res} - even`);

        } else {

            console.log (`${N1} - ${N2} = ${res} - odd`)

        }

        
    } else if (operator === "*") {

        res = N1 * N2;

        if (res % 2 === 0) {

            console.log (`${N1} * ${N2} = ${res} - even`);

        } else {

            console.log (`${N1} * ${N2} = ${res} - odd`)
        }

    } else if (operator === "/") {

        res = N1 / N2;

        

        if (N2 === 0) {

            console.log (`Cannot divide ${N1} by zero`);

        } else {

            console.log (`${N1} / ${N2} = ${res.toFixed(2)}`);


        }
    } else if (operator === "%") {

        res = N1 % N2;

        if (N2 === 0) {

            console.log (`Cannot divide ${N1} by zero`);

        } else {

            console.log (`${N1} % ${N2} = ${res}`);
        }




    }

    
    
    
}


operationsBetweenNumbers(["10",
"0",
"%"])



