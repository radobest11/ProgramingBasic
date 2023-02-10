function seriesCalculator(input) {

    let name = input[0];
    let countSeasons = Number(input[1]);
    let countEpisods = Number(input[2]);
    let timeWihtoutReklama = Number(input[3]);

    let timeWIthReklama = timeWihtoutReklama * 1.2;

    let lastEpisodInSeason = countSeasons * 10;

    let totalTime = countEpisods * countSeasons * timeWIthReklama + lastEpisodInSeason

console.log(`Total time needed to watch the ${name} series is ${Math.floor(totalTime)} minutes.`)
}
seriesCalculator(["Game of Thrones",
"7",
"10",
"50"])
