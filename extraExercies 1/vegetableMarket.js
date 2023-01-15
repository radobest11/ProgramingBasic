function vegetableMarket (input) {

    let priceForOneKilogramVegetable = Number(input[0]);

    let priceforOneKilogramFruits = Number(input[1]);
    
    let kilogreameVegetable = Number(input[2]);

    let kilogrameFruit = Number(input[3]);

    let Vegetable = priceForOneKilogramVegetable * kilogreameVegetable;

    let Fruit = priceforOneKilogramFruits * kilogrameFruit;

    let sum = (Vegetable + Fruit) / 1.94;

    console.log(sum.toFixed(2));

}
vegetableMarket(["0.194",
"19.4",
"10","10"])