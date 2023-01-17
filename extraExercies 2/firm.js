function firm (input) {

    let wokringHour = Number(input[0]);

    let workingDay = Number(input[1]);

    let countPersonalWorkingOvertime = Number(input[2]);

    let workingHoursProject = workingDay * 8 * 0.9;

    let overtimeHours = countPersonalWorkingOvertime * 2 * workingDay;

    let totalWorkinghours = Math.floor(workingHoursProject + overtimeHours);



    let diff = Math.abs(totalWorkinghours - wokringHour);

    if (workingHoursProject + overtimeHours >= wokringHour) {

        console.log (`Yes!${diff} hours left.`);


    } else {

        console.log(`Not enough time!${diff} hours needed.`);

    }
}
firm(["90",
"7","3"])