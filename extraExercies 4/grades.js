function grades (input) {

    let index = 0;
    let students = Number(input[index]);
    index++;

    let countFail = 0;
    let count3to4 = 0;
    let count4to5 = 0;
    let topStudents = 0;
    let totalOcenki = 0;



    for (let i = 1; i <= students; i++){


        let ocenki = Number(input[index]);

        totalOcenki += ocenki;

        index++;



        if (ocenki >= 5) {
            
            topStudents++;

        } else if (ocenki >= 4 && ocenki <= 4.99) {

            count4to5++;

        }else if (ocenki >= 3 && ocenki <= 3.99) {

            count3to4++;

        }else {

            countFail++;
        }
    }

    console.log(`Top students: ${(topStudents/students * 100).toFixed(2) + "%"}`);
    console.log(`Between 4.00 and 4.99: ${(count4to5/students * 100).toFixed(2) + "%"}`)
    console.log(`Between 3.00 and 3.99: ${(count3to4 / students * 100).toFixed(2) + "%"}`);
    console.log(`Fail: ${(countFail / students * 100).toFixed(2) + "%"}`);
    console.log(`Average: ${(totalOcenki / students).toFixed(2)}`)

}
grades(["10", "3", "2.99", "5.68", "3.01", "4", "4", "6", "4.5", "2.44", "5"])