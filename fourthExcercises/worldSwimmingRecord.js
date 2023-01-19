function worldSwimmingRecord (input) {

    let record = Number(input[0]);

    let distance = Number(input[1]);

    let timeForOneMeter = Number(input[2]);

    let delay = Math.floor(distance / 15) * 12.5;

    let time = distance * timeForOneMeter;

    let totalTime = time + delay;


    if (totalTime < record) {

        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);

    } else {

        let diff = Math.abs(record - totalTime);

        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }



}

worldSwimmingRecord(["55555.67",
"3017",
"5.03"])

