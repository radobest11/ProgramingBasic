function cinemaTickets(input) {


    let index = 0;

    let command = input[index];
    index++;





    let counterKidsTicket = 0;

    let counterStudentTicket = 0;
    let counterStandartTicket = 0;
    let counterTotal = 0;




    while (command !== "Finish") {


        let name = command;
        let freeSpaces = Number(input[index]);
        index++;
        let tempCommand = input[index];
        index++;
        let tempTicket = 0;









        while (tempCommand !== "End") {

            tempTicket++;


            if (tempCommand === "standard") {

                counterStandartTicket++;


            } else if (tempCommand === "kid") {

                counterKidsTicket++;

            } else if (tempCommand === "student") {


                counterStudentTicket++;
            }

            if(tempTicket >= freeSpaces) {

                break;
            }



            tempCommand = input[index];
            index++;

            

        }

        counterTotal += tempTicket;

        command = input[index];
        index++;


        console.log(`${name} - ${(tempTicket / freeSpaces * 100).toFixed(2)}% full.`)
    }

    let studentP = counterStudentTicket / counterTotal * 100;
    let standardP = counterStandartTicket / counterTotal * 100;
    let kidP = counterKidsTicket / counterTotal * 100;

    console.log(`Total tickets: ${counterTotal}`);
    console.log(`${studentP.toFixed(2)}% student tickets.`)
    console.log(`${standardP.toFixed(2)}% standard tickets.`);
    console.log(`${kidP.toFixed(2)}% kids tickets.`);


}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

