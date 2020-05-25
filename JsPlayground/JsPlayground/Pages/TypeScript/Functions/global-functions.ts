namespace TypeScriptDemos.GlobalFunctions
{

    // Defining functions NOT within a class. These are considered GLOBAL functions.  Not restricted to be within a class.
    // You can mouse-over this function and see that it outputs a number because the arguments are numbers.
    // Example 1
    let CalculateMillage = function (lightYearsTraveled: number, gallons: number) {
        return lightYearsTraveled / gallons;
    }

    // Example 2
    // Here is a 'short cut' to write the same thing. This uses arrow function and omits the keyword 'function'.
    let CalculateMillage2 = (lightYearsTraveled: number, gallons: number) => lightYearsTraveled / gallons;

    window.onload = function () {
        let LightYearsPerGallonLabel = <HTMLElement>document.getElementById("light-years-per-gallon");
        LightYearsPerGallonLabel.innerHTML = "Light Years Per Gallon: " + CalculateMillage(100, 3);

        let LightYearsPerGallonLabel2 = <HTMLElement>document.getElementById("light-years-per-gallon-2");
        LightYearsPerGallonLabel2.innerHTML = "Light Years Per Gallon: " + CalculateMillage2(100, 2.3);
    };

}