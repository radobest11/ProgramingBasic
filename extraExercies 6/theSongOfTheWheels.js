function theSongOfTheWheels(input) {

    let num = Number(input[0]);

    let counter = 0;

    let buff = ""

    for (let a = 1; a <= 9; a++) {

        for (let b = 1; b <= 9; b++) {

            for (let c = 1; c <= 9; c++) {

                for (let d = 1; d <= 9; d++) {


                    if (a < b && c > d && (num === a * b + c * d)) {

                        buff += "" + a + b + c + d + " ";

                        counter++;


                    }
                }
            }
        }
    }


    console.log(buff);

    if (counter >= 4) {

        console.log(`Password: ${buff[15]}${buff[16]}${buff[17]}${buff[18]}`);

    } else {

        console.log("No!")
    }
}
theSongOfTheWheels(["110"])