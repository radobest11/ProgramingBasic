function vacatonBooklist (input) {

let numberOfpages = Number(input[0]);

let pagesFor1hour = Number(input[1]);

let days = Number(input[2]);

let totalHours = numberOfpages / pagesFor1hour;

let totalHoursperDay = totalHours / days;

console.log(totalHoursperDay);



}

vacatonBooklist(["432 ",
"15 ",
"4 "]
)