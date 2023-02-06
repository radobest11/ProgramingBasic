function cake(input) {

    let index = 0;

    let l = Number(input[index]);
    index++;
    let w = Number(input[index]);
    index++;

    let cakesize = l * w;

    let command = input[index];
    index++;

    let isCake = true;

    while (command !== "STOP") {

        let piece = Number(command);

        cakesize -= piece;


        if (cakesize < 0) {
            isCake = false;

            break;
        }
        command = input[index];
        index++;
    }

    if (isCake) {
        console.log(`${cakesize} pieces are left.`);


    } else {

        console.log(`No more cake left! You need ${Math.abs(cakesize)} pieces more.`);

    }

}


cake(["10",
"2",
"2",
"4",
"6",
"STOP"])
