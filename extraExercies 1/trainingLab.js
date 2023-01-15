function trainingLab (input) {

    let h = Number(input[0]);

    let w = Number(input[1]);

    h = h * 100;

    w = (w * 100) - 100;


    let totalH = Math.floor (h / 120);

    let totalW = Math.floor (w / 70);

    console.log((totalH * totalW) - 3);
    
}
trainingLab(["15",
"8.9"])