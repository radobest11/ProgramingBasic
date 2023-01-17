function sleepyTomCat(input) {

    let freeDays = Number(input[0]);

    let workingDays = 365 - freeDays;

    let Work = 63 * workingDays ;

    let free = 127 * freeDays;

    let totalPlay = Work + free;


    if(totalPlay > 30000) {


        

        let diff = Math.abs(30000 - totalPlay);

        let h = Math.floor(diff / 60);

        let m = diff % 60;

        console.log("Tom will run away");
        console.log(`${h} hours and ${m} minutes more for play`);

    } else {

        let diff = Math.abs(totalPlay - 30000);

        let h = Math.floor(diff / 60);

        let m = diff % 60;

        console.log("Tom sleeps well");
        console.log(`${h} hours and ${m} minutes less for play`);


    }


}
sleepyTomCat(["20"])