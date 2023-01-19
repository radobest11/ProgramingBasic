function footbalLeague (input) {

    let index = 0;
    let maxPeople = Number(input[index]);
    index++;
    let countFans = Number(input[index]);
    index++;

    let countAsector = 0;
    let countBsector = 0;
    let countVsector = 0;
    let countGsector = 0;



    for(let i = 1; i <= countFans; i++) {


        let sector = input[index];

        index++;

        if (sector === "A") {

            countAsector++;

        } else if (sector === "B") {

            countBsector++;

        } else if (sector === "V") {

            countVsector++;
        } else {

            countGsector++;
        }

    }

    let AsectorPer = countAsector / countFans * 100;
    let BsectorPer = countBsector / countFans * 100;
    let VsectorPer = countVsector / countFans * 100;
    let GsectorPer = countGsector / countFans * 100;

    console.log(AsectorPer.toFixed(2) + "%");
    console.log(BsectorPer.toFixed(2) + "%");
    console.log(VsectorPer.toFixed(2) + "%");
    console.log(GsectorPer.toFixed(2) + "%");
    console.log(((countFans / maxPeople)* 100).toFixed(2) + "%")
    


    
}
footbalLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"])

