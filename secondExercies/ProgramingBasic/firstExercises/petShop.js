function petShop(input) {

let dogFood = Number (input[0]);
let catFood = Number (input[1]);

let priceOfdogFood = 2.5;
let priceOfcatFood = 4;

let totalPriceofdogFood = dogFood * priceOfdogFood;
let totalPriceofCatfood = catFood * priceOfcatFood;
let totalPrice = totalPriceofCatfood + totalPriceofdogFood;

console.log (totalPrice ,'lv.')




}

petShop(["13",
"9"]
)