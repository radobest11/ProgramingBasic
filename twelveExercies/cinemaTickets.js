function cinemaTickets (input) {

    let index = 0;

    let command = input[index];
    index++;
    let totalSellBilets = 0;

    let counterStudents = 0;
    let counterStandart = 0;
    let counterKids = 0;

    while (command !== "Finish") {

        let name = command;

        let freeSpace = Number(input[index]);
        index++;

        let tempCommand = input[index];
        index++;


        let tempTicket = 0;

        while(tempCommand !== "End"){

            tempTicket++;

           
            


            switch(tempCommand){

                case "student" : counterStudents++; break;
                case "standard" : counterStandart++; break;
                case "kid" : counterKids++; break;
            }
            
            if (tempTicket >= freeSpace) {

                break;
            }
            

            tempCommand = input[index];
            index++;


            
        }

        totalSellBilets += tempTicket;


        command = input[index];
        index++;

        let tempEmptySpace = tempTicket / freeSpace * 100;

        console.log(`${name} - ${tempEmptySpace.toFixed(2)}% full.`);

        
    }

    console.log(`Total tickets: ${totalSellBilets}`);

    let totalStudentsP = counterStudents / totalSellBilets * 100;
    let totalStandartP = counterStandart / totalSellBilets * 100;
    let totalKidsP = counterKids / totalSellBilets * 100;

    console.log(`${totalStudentsP.toFixed(2)}% student tickets.`);
    console.log(`${totalStandartP.toFixed(2)}% standard tickets.`);
    console.log(`${totalKidsP.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
