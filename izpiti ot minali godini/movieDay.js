function movieDay(input) {
    let timePictures = Number(input[0]);

    let countScenes = Number(input[1]);

    let timeFor1Scene = Number(input[2]);

    let teren = 0.15 * timePictures;

    let totalTimeForScenes = countScenes * timeFor1Scene;

    let totalTime = totalTimeForScenes + teren;

    let diff = Math.abs(timePictures - totalTime);


    if(totalTime >= timePictures) {

        console.log(`Time is up! To complete the movie you need ${Math.round(diff)} minutes.`);

    } else {

        console.log(`You managed to finish the movie on time! You have ${Math.round(diff)} minutes left!`);
    }
    
}
movieDay(["60", "15", "3"])