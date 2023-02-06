function oldBooks(input) {

    let favouriteBooks = input[0];


    index = 1;

    let bookIsFound = false;

    let currentBook = input[index];




    while (currentBook !== "No More Books") {


        if (favouriteBooks === currentBook) {


            bookIsFound = true;

            break;
        }

        index++;


        currentBook = input[index];
    }




    if (bookIsFound === false) {

        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`);


    } else {

        console.log(`You checked ${index - 1} books and found it.`)
    }
}
oldBooks(["Troy",
    "Stronger",
    "Life Style",
    "Troy"])





