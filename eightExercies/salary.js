function salary (input) {
    
    let index = 0;

    let openTabs = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;

    let facebookPenalty = 150;
    let instagramPenalty = 100;
    let redditPenalty = 50;

    for (let i = 1; i <= openTabs; i++) {

        currentTabs = input[index];
        index++;

        if (salary < 0) {

            break;
        }

        if (currentTabs === "Facebook") {

            salary -= facebookPenalty;

        } else if (currentTabs === "Instagram") {

            salary -= instagramPenalty;

        } else if (currentTabs === "Reddit") {

            salary -= redditPenalty;
        }

        
    }

    if (salary <= 0) {

        console.log("You have lost your salary.");
    } else {

        console.log(Math.trunc(salary));
    }
}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])
