function catFood (input) {

    let index = 0;

    let countCats = Number(input[index]);
    index++;

    let counter100to200 = 0;
    let counter200to300 = 0;
    let counter300to400 = 0;
    let totalFood = 0;


    for(let i = 1; i <= countCats; i++) {

        let catFoodsPerDayGram = Number(input[index]);
        index++;

        totalFood += catFoodsPerDayGram;

        if(catFoodsPerDayGram < 200) {

            counter100to200++;

        } else if (catFoodsPerDayGram >= 200 && catFoodsPerDayGram < 300) {

            counter200to300++;

        } else {

            counter300to400++;
        }

    }

    let totalFoodPrice = (12.45 / 1000) * totalFood;

    console.log(`Group 1: ${counter100to200} cats.`);
    console.log(`Group 2: ${counter200to300} cats.`);
    console.log(`Group 3: ${counter300to400} cats.`);
    console.log(`Price for food per day: ${totalFoodPrice.toFixed(2)} lv.`)

}
catFood(["7",
"100",
"200",
"342",
"300",
"234",
"123",
"212"])

