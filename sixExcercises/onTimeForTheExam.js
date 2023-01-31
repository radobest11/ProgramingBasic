function onTimeForTheExam(input){

    let hourTest = Number(input[0]);

    let minuteTest = Number(input[1]);

    let hourArrival = Number(input[2]);

    let minuteAarrival = Number(input[3]);

    let hourTestMinute = hourTest * 60 + minuteTest;

    

    let hourArrivalMinute = hourArrival * 60 + minuteAarrival;

    

    if (hourTestMinute < hourArrivalMinute){

        console.log("Late");

        let diff =  Math.abs(hourTestMinute - hourArrivalMinute);

        let h = Math.floor(diff / 60);

        let m = diff % 60;

        

        if (h >= 1){

            if (m < 10) {

                console.log(`${h}:0${m} hours after the start`);
            }else {

                console.log(`${h}:${m} hours after the start`);
            }
        } else {

            console.log(`${m} minutes after the start`);
        }
        
    }else if (hourTestMinute === hourArrivalMinute || hourTestMinute - hourArrivalMinute <= 30) {

        console.log("On time");

        let diff = Math.abs(hourTestMinute - hourArrivalMinute);

        if (diff !== 0) {

            let m = diff % 60;

            console.log(`${m} minutes before the start`);


        }

    } else {

        console.log("Early");

        let diff = Math.abs (hourTestMinute - hourArrivalMinute);

        let h = Math.floor (diff / 60);

        let m = diff % 60;

        if (h >= 1) {

            if (m < 10) {

                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start`);

            }
        } else {
            
            
            console.log(`${m} minutes before the start`);

    }
}

    
} 

onTimeForTheExam(["16",
"00",
"14",
"55"])


