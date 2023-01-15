function celsiusToFahrenheit (input) {

    let celsiusGradus = Number(input[0]);

    let fahrenheitGradus = celsiusGradus * (9 / 5) + 32;


    console.log(fahrenheitGradus.toFixed(2));


}
celsiusToFahrenheit(["25"])