function logistics (input) {

    let index = 0;

    let CountTovari = Number(input[index]);

    index ++;


    let countBus = 0;
    let countTruck = 0;
    let countTrain = 0;
    let totalCount = 0;
    


    

    



    for (i = 1; i <= CountTovari; i++) {

        let tovar = Number(input[index]);
        
        index++;

        totalCount += tovar;


        if (tovar <= 3) {

            countBus += tovar;

        } else if (tovar > 3 && tovar <= 11) {

            countTruck += tovar;

        } else {

            countTrain += tovar ;
        }

        
    }

    
    let totalPrice = (countBus * 200 + countTruck * 175 + countTrain * 120);
    
    
    let avarage = totalPrice / totalCount;

    let BusPer = countBus/totalCount * 100;
    let truckPer = countTruck/totalCount * 100;
    let trainPer = countTrain/totalCount * 100;
    
    console.log(avarage.toFixed(2));
    console.log(BusPer.toFixed(2) + "%");
    console.log(truckPer.toFixed(2) + "%");
    console.log(trainPer.toFixed(2) + "%")
}
logistics(["4", "1", "5", "16", "3"])