function supplieForschool (input) {

let pens = 5.8;

let markers = 7.2;

let cleaner = 1.2;


let packetPens = pens * Number(input[0]);

let packetMarkers = markers * Number(input[1]);

let packetCleaner = cleaner * Number(input[2]);

let discount = Number(input[3])/100;

let Amount = (packetPens + packetMarkers + packetCleaner);

let totalDiscount = Amount * discount;

let totalAmount = Amount - totalDiscount



console.log (totalAmount);

}

supplieForschool(["4 ",
"2 ",
"5 ",
"13 "]
)