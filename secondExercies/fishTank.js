function fishTank (input) {

    let length = Number(input[0]);

    let width = Number(input[1]);

    let height = Number(input[2]);

    let percentage = Number(input[3]);


    let totalLitre = (length * width * height) / 1000;

    let totalPercentage = totalLitre * percentage/100;

    let totalVolume = totalLitre - totalPercentage;


    console.log(totalVolume)

}

fishTank(["105 ",
"77 ",
"89 ",
"18.5 "]
)