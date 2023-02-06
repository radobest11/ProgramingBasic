function minNumber (input) {
    let index = 0;

    let inputNumber = input[index];

    index++;

    let min = Number.MAX_SAFE_INTEGER;
    
    

    while(inputNumber !== "Stop") {

        let num = Number(inputNumber);

        if (min > num) {

            min = num;

        }

        inputNumber = input[index];

        index++;

    }
    console.log(min)
}
minNumber(["100",
"99",
"80",
"70",
"Stop"])
