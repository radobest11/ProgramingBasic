function theMostPowerfulWord(input) {

    let index = 0;

    let word = String(input[index]);
    index++;

    let max = Number.MIN_SAFE_INTEGER
    let bestWord = ""





    while (word !== "End of words") {

        let tempPoints = 0;






        for (let i = 0; i < word.length; i++) {


            let tempWord = word.charCodeAt(i);






            tempPoints += tempWord;
        }

        if (word[0] === "a" || word[0] === "e" || word[0] === "i" || word[0] === "o" || word[0] === "u" || word[0] === "y" || word[0] === "A" || word[0] === "E" || word[0] === "I" || word[0] === "O" || word[0] === "U" || word[0] === "Y") {

            tempPoints *= word.length;

        } else {

            tempPoints /= word.length;
        }



        if (tempPoints >= max) {

            max = tempPoints;

            bestWord = word;


        }





        word = input[index];
        index++;

        

    }

    console.log(`The most powerful word is ${bestWord} - ${Math.floor(max)}`);


}
theMostPowerfulWord(["The",
"Most",
"Powerful",
"Word",
"Is",
"Experience",
"End of words"])
