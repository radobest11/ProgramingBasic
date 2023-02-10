function skeleton (input){


    let minutesControl = Number(input[0]);
    let secondInControl = Number(input[1]);
    let lengthNaUreq = Number(input[2]);
    let secondZaIzminavaneNa100Metra = Number(input[3]);


    let secondControl = minutesControl * 60;

    let olympicRecord = secondControl + secondInControl;

    let namalenoVreme = lengthNaUreq / 120 * 2.5;
    let timeMarin = (lengthNaUreq / 100) * secondZaIzminavaneNa100Metra - namalenoVreme;

    let diff = Math.abs(timeMarin - olympicRecord);

    if(timeMarin <= olympicRecord) {

        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${timeMarin.toFixed(3)}.`);

    } else {

        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`)
    }


}
skeleton(["1",
"20",
"1546",
"12"])

