function sumNumbers(input) {
    let index = 0;
    let totalSum = Number(input[index]);
    index++;
    let sum = 0;

    while(sum < totalSum) {

    let currentNumber = Number(input[index]);
    sum += currentNumber

    index++;
    }

    console.log(sum)

}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"8"])
