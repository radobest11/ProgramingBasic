function lunchbreak(input) {

    let nameSerial = input[0];

    let timeForOneSeries = Number(input[1]);

    let timeForLunchBreak = Number(input[2]);

    let lunchTime = timeForLunchBreak / 8;

    let timeForRest = timeForLunchBreak / 4;

    let timeForWatching = timeForLunchBreak - (lunchTime + timeForRest);

    if (timeForWatching >= timeForOneSeries) {

        let diff = Math.abs(timeForLunchBreak - (timeForOneSeries + lunchTime + timeForRest));

        console.log(`You have enough time to watch ${nameSerial} and left with ${Math.ceil(diff)} minutes free time.`);

    } else {


        let diff = Math.abs(timeForLunchBreak - (timeForOneSeries + lunchTime + timeForRest));

        console.log(`You don't have enough time to watch ${nameSerial}, you need ${Math.ceil(diff)} more minutes.`);
    }


}

lunchbreak(["Teen Wolf",
    "48",
    "60"])

