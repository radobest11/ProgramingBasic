function catLife(input) {

    let kindCats = input[0];
    let sex = input[1];

    let catsMonths = 0;

    switch (kindCats) {


        case "British Shorthair":

            if (sex === "m") {

                catsMonths = (13 * 12) / 6;

            } else {
                catsMonths = (14 * 12) / 6;

            }
            break;

        case "Siamese":

            if (sex === "m") {

                catsMonths = (15 * 12) / 6;

            } else {
                catsMonths = (16 * 12) / 6;

            }
            break;

        case "Persian":

            if (sex === "m") {

                catsMonths = (14 * 12) / 6;

            } else {
                catsMonths = (15 * 12) / 6;

            }
            break;

        case "Ragdoll":

            if (sex === "m") {

                catsMonths = (16 * 12) / 6;

            } else {
                catsMonths = (17 * 12) / 6;

            }
            break;

        case "American Shorthair":

            if (sex === "m") {

                catsMonths = (12 * 12) / 6;

            } else {
                catsMonths = (13 * 12) / 6;

            }
            break;

        case "Siberian":

            if (sex === "m") {

                catsMonths = (11 * 12) / 6;

            } else {
                catsMonths = (12 * 12) / 6;

            }
            break;

        



    }

    if(kindCats === "British Shorthair" || kindCats === "Siamese" || kindCats === "Persian" || kindCats === "Ragdoll" || kindCats === "American Shorthair" || kindCats === "Siberian"){

        console.log(`${Math.floor(catsMonths)} cat months`);

    } else {

        console.log(`${kindCats} is invalid cat!`);
    }

    

}
catLife(["Tom",
"m"])



