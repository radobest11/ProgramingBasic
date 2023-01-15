function housePainting (input) {

    let highHouseX = Number(input[0]);

    let wengthWallY = Number(input[1]);

    let highRoofH = Number(input[2]);




    let greenPaint = (2 * (highHouseX * highHouseX)) + (2 * (highHouseX * wengthWallY)) - (1.2 * 2) - (2 *(1.5 * 1.5));

    let redPaint = 2 * (highRoofH * highHouseX / 2) + 2 * (highHouseX * wengthWallY);

    console.log((greenPaint / 3.4).toFixed(2));
    console.log((redPaint / 4.3).toFixed(2));



}
housePainting(["6",
"10", "5.2"])