function miningRig (input) {


    let priceVideoCard = Number(input[0]);
    let priceOnePrehodnik = Number(input[1]);
    let priceElectricityForOneCardForOneDay = Number(input[2]);
    let incomeFromOneCardForOneDay = Number(input[3]);


    let priceForAllVideoCards = priceVideoCard * 13;
    let priceForAllPrehodnici = priceOnePrehodnik * 13;
    let allOtherCosts = 1000;

    let netIncomeFromOneCard = incomeFromOneCardForOneDay - priceElectricityForOneCardForOneDay;
    let netIncomefromAllCards = 13 * netIncomeFromOneCard;

    let totalCosts = priceForAllPrehodnici + priceForAllVideoCards + allOtherCosts;

    let countDays = totalCosts / netIncomefromAllCards;

    console.log(totalCosts)

    console.log(Math.ceil(countDays))

    

}
miningRig(["800",
"10",
"0.32",
"6.4"])
