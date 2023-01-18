function schoolCamp (input) {

    let season = input[0];
    let kindGroup = input[1];
    let students = Number(input[2]);
    let nights = Number(input[3]);

    let finalAmount = 0;
    let sport;

    switch(season) {

        case "Winter" :

        if(kindGroup === "boys" || kindGroup === "girls") {

            finalAmount = 9.6 * nights * students;
        } else {

            finalAmount = 10 * nights * students;

        }
        break;

        case "Spring" :

        if (kindGroup === "boys" || kindGroup === "girls") {

            finalAmount = 7.2 * nights * students;
        } else {

            finalAmount = 9.5 * nights * students;

        }
        break;

        case "Summer" :

            if (kindGroup === "boys" || kindGroup === "girls") {

                finalAmount = 15 * nights * students;
            } else {
    
                finalAmount = 20 * nights * students;
    
            }
        break;


    }

    if (students >= 50) {

        finalAmount *= 0.5;

    } else if (students >= 20 && students < 50) {

        finalAmount *= 0.85;

    } else if (students >= 10 && students < 20) {

        finalAmount *= 0.95;
    }

    if (season === "Winter"  && kindGroup === "girls") {

        sport = "Gymnastics";

    } else if (season === "Winter" && kindGroup === "boys") {

        sport = "Judo";

    } else if (season === "Winter" && kindGroup === "mixed") {

        sport = "Ski";
    } else if (season === "Spring" && kindGroup === "girls") {

        sport = "Athletics";

    } else if (season === "Spring" && kindGroup === "boys") {

        sport = "Tennis";
    }else if (season === "Spring" && kindGroup === "mixed") {

        sport = "Cycling";
    } else if (season === "Summer" && kindGroup === "girls") {

        sport = "Volleyball";

    }else if (season === "Summer" && kindGroup === "boys"){

        sport = "Football";
    } else {

        sport = "Swimming"
    }
    

    console.log(`${sport} ${finalAmount.toFixed(2)} lv.`)
}
schoolCamp(["Spring", "girls", "20", "7"])