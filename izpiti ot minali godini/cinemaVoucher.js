function cinemaVoucher(input) {

    let index = 0;

    let voucher = Number(input[index]);
    index++;

    let command = String(input[index]);
    index++;

    let countMovie = 0;
    let countOthers = 0;

    while (command !== "End") {



        let name = command;




        let tempName = name.length;



        if (tempName > 8) {

            voucher -= name.charCodeAt(0) + name.charCodeAt(1);


            if (voucher >= 0) {

                countMovie++;
            }




        } else if (tempName <= 8) {

            voucher -= name.charCodeAt(0);

            if (voucher >= 0) {

                countOthers++;

            }




        }

        if (voucher <= 0) {

            break;
        }



        command = input[index];
        index++;

    }

    console.log(countMovie);
    console.log(countOthers);



}
cinemaVoucher(["300" ,"Captain Marvel" ,"popcorn" ,"Pepsi"])

