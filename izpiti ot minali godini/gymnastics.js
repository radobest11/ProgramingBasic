function gymnastics (input) {

    let country = input[0];
    let ured = input[1];

    let grade = 0;

    switch (country){


        case "Russia" :

        if (ured === "ribbon") {

            grade += 9.100 + 9.400;

        } else if (ured === "hoop") {

            grade += 9.300 + 9.800;

        } else {

            grade += 9.600 + 9.000;
        }
        break;

        case "Bulgaria" :

            if (ured === "ribbon") {

                grade += 9.600 + 9.400;
    
            } else if (ured === "hoop") {
    
                grade += 9.550 + 9.750;
    
            } else {
    
                grade += 9.500 + 9.400;
            }
            break;

            case "Italy" :

                if (ured === "ribbon") {

                    grade += 9.200 + 9.500;
        
                } else if (ured === "hoop") {
        
                    grade += 9.450 + 9.350;
        
                } else {
        
                    grade += 9.700 + 9.150;
                }
                break;


    }

    let percentage = 100 - (grade / 20 * 100);

    console.log(`The team of ${country} get ${grade.toFixed(3)} on ${ured}.`);
    console.log(percentage.toFixed(2) + "%")

    
}
gymnastics(["Bulgaria",
"ribbon"])
