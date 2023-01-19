function sumSeconds (input){

    let timeFirstSec = Number(input[0]);

    let timeSecondSec = Number(input[1]);

    let timeThirthSec = Number(input[2]);

    let totalTime = timeFirstSec + timeSecondSec + timeThirthSec;

    let minutes = Math.floor (totalTime / 60);

    let seconds = totalTime % 60;

    if (seconds < 10) {

        console.log (`${minutes}:0${seconds}`);

    } else {

        console.log(`${minutes}:${seconds}`);
    }


    }

sumSeconds(["14", "12",
"10"])



