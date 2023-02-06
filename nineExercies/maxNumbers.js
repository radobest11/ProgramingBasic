function maxNumbers (input) {
    let index = 0;


    let inputNum = input[index];

    index ++;
    let max = Number.MIN_SAFE_INTEGER;


    while(inputNum !== "Stop") {

        let num = Number(inputNum);

        if (num > max) {

            max = num;

        }

        inputNum = input[index];
        index++;



    }

    console.log(max)
}
maxNumbers(["100",
"99",
"80",
"70",
"Stop"])
