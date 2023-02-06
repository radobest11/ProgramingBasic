function moving(input) {

    index = 0;

    let w = Number(input[index]);
    index++;

    let l = Number(input[index]);
    index++;

    let h = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let spaseInApp = w * l * h;

    let isFreeSpace = true;

    while (command !== "Done") {

        let box = Number(command);

        spaseInApp -= box;

        if (spaseInApp < 0) {
            isFreeSpace = false;

            break;
        }

        command = input[index];
        index++;




    }




    if (isFreeSpace) {

        console.log(`${spaseInApp} Cubic meters left.`);

    } else {

        console.log(`No more free space! You need ${Math.abs(spaseInApp)} Cubic meters more.`);

    }




}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])
