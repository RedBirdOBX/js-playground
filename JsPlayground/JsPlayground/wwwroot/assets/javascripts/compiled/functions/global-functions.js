"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var GlobalFunctions;
    (function (GlobalFunctions) {
        let CalculateMillage = function (lightYearsTraveled, gallons) {
            return lightYearsTraveled / gallons;
        };
        let CalculateMillage2 = (lightYearsTraveled, gallons) => lightYearsTraveled / gallons;
        window.onload = function () {
            let LightYearsPerGallonLabel = document.getElementById("light-years-per-gallon");
            LightYearsPerGallonLabel.innerHTML = "Light Years Per Gallon: " + CalculateMillage(100, 3);
            let LightYearsPerGallonLabel2 = document.getElementById("light-years-per-gallon-2");
            LightYearsPerGallonLabel2.innerHTML = "Light Years Per Gallon: " + CalculateMillage2(100, 2.3);
        };
    })(GlobalFunctions = TypeScriptDemos.GlobalFunctions || (TypeScriptDemos.GlobalFunctions = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=global-functions.js.map