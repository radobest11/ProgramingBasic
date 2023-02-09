function movieRatings (input) {

    let index = 0;

    let countMovie = Number(input[index]);
    index++;

    let min = Number.MAX_SAFE_INTEGER;

    let max = Number.MIN_SAFE_INTEGER;

    let counterRatings = 0;

    let totalRatings = 0;

    let bestRatings
    let lowRatings 
    


    for (let i = 1; i <= countMovie; i++) {

        

        let name = input[index];
        index++;
       
        let ratings = Number(input[index]);
               
        index++;

        


        if(ratings < min) {

            min = ratings;
            lowRatings = name;
        }

        if ( ratings > max) {

            max = ratings;
            bestRatings = name;
        }


        counterRatings++;

        totalRatings += ratings;
        
       
            
        
    }


    let avarageRatings = totalRatings / counterRatings;

    console.log(`${bestRatings} is with highest rating: ${max.toFixed(1)}`);
    console.log(`${lowRatings} is with lowest rating: ${min.toFixed(1)}`);
    console.log(`Average rating: ${avarageRatings.toFixed(1)}`)
}
movieRatings(["5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"])
