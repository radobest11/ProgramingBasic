function time15Minutes (input) {


    let hours = Number(input[0]);

    let minutes = Number(input[1]);


    let totalTime = hours * 60 + minutes + 15;

    let h = Math.floor(totalTime / 60);

    let m = totalTime % 60;

    if (h > 23) {

        h = 0;

    }

    if (m < 10) {

        console.log(`${h}:0${m}`);

    } else {

        console.log(`${h}:${m}`);
    }

}

time15Minutes(["23", "59"])
  