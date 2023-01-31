function weddingSeats(input) {


    let lastSector = input[0];
    let countRowInFirstSector = Number(input[1]);
    let countSeatsInNechetenRow = Number(input[2]);
  
  
  
    let a1 = lastSector.charCodeAt(0);
    let firstLetter = "A";
    let firstLetterforRows = "a";
    let d1 = firstLetterforRows.charCodeAt(0)
  
    let c1 = firstLetter.charCodeAt(0);
  
    let firstALphabet = "";
    let firstPlace = "";
  
  
    let lastcheten = d1 + 2 + countSeatsInNechetenRow;
    let lastNecheten = d1 + countSeatsInNechetenRow;
  
    let total = 0;
  
  
    for (let i = c1; i <= a1; i++) {
  
      firstALphabet = String.fromCharCode(i)
  
  
      let counter = 0;
      for (let a = 1; a <= countRowInFirstSector; a++) {
  
        
  
        counter++;
  
  
  
  
        if (counter % 2 !== 0) {
  
          for (let c = d1; c < lastNecheten; c++) {
  
            firstPlace = String.fromCharCode(c);
  
            counter++;
            total++;
  
            console.log(`${firstALphabet.charAt(0)}${a}${firstPlace.charAt(0)}`)
  
  
          }
  
        } else if (counter % 2 === 0) {
  
          for (let c = d1; c < lastcheten; c++) {
  
            firstPlace = String.fromCharCode(c);
  
            counter++;
            total++;
  
            console.log(`${firstALphabet.charAt(0)}${a}${firstPlace.charAt(0)}`)
  
  
  
          }
          
        }
        if(countSeatsInNechetenRow % 2 !== 0) {
  
          counter++;
  
  
        }
  
        
  
  
  
  
  
  
  
  
      }
  
      if (countRowInFirstSector > counter) {
  
        countRowInFirstSector++;
        counter++;
  
  
      }
  
      countRowInFirstSector++;
  
      counter++
  
  
    }
  
  
    console.log(total)
  
  }
weddingSeats(["E", "1", "3"])