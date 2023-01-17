function pipesInPool(input) {

    let volumePool = Number(input[0]);

    let debitP1 = Number(input[1]);

    let debitP2 = Number(input[2]);

    let hours = Number(input[3]);

    let totalFullyPool = debitP1*hours + debitP2*hours;

    let totalFullyPoolPercentage = (((debitP1*hours) + (debitP2*hours))/volumePool) * 100

    let percentageP1 = (debitP1*hours)/totalFullyPool*100;

    let percentageP2 = (debitP2*hours)/totalFullyPool*100;

    


    if (volumePool >= (debitP1*hours + debitP2*hours)) {

        console.log(`The pool is ${totalFullyPoolPercentage}% full. Pipe 1: ${(percentageP1.toFixed(2))}%. Pipe 2: ${(percentageP2.toFixed(2))}%`);

    } else if (volumePool < (debitP1*hours + debitP2*hours)) {

        console.log(`For ${hours} hours the pool overflows with ${totalFullyPool - volumePool} liters.`);
    }
}
pipesInPool(["1000",
"100",
"120","3"])