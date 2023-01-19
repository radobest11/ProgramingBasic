function backToThePast (input) {

    let money = Number(input[0]);
    let finalyear = Number(input[1]);
    
    let ivanYears = 18;
    

    for(let i = 1800; i <= finalyear; i++) {

        


        if (i % 2 === 0) {


            money -= 12000;

            ivanYears++;
         
        }  else  {

            money -= 12000 + 50 * (ivanYears++);
        }
    }

    if (money >= 0) {

        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`);

    } else {

        console.log(`He will need ${(Math.abs(money)).toFixed(2)} dollars to survive.`);
    }
}
backToThePast(["100000.15", "1808"])