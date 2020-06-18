"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Types;
    (function (Types) {
        let Name = "Ricky Bobby";
        let Age = 50;
        let IsDriver = true;
        let Foods = ["Twinkies", "Potato Chips", "Tacos", "Burritos"];
        let FirstFood = Foods[0];
        let SecondFood = Foods[1];
        let YearsWon = [2005, 2008, 2010, 2011];
        let IsFast = function () {
            return true;
        };
        function CountTotalYearsWon(YearsWon) {
            let results = YearsWon.length;
            return results;
        }
        function LastYearWon(YearsWon) {
            let results = YearsWon[YearsWon.length - 1];
            return results;
        }
        window.onload = function () {
            let nameLabel = document.getElementById("driver-name");
            nameLabel.innerHTML = "Name: " + Name;
            let ageLabel = document.getElementById("driver-age");
            ageLabel.innerHTML = "Age: " + Age;
            let isDriverLabel = document.getElementById("driver-isDriver");
            isDriverLabel.innerHTML = "Is Driver: " + IsDriver;
            let isFastLabel = document.getElementById("driver-isFast");
            isFastLabel.innerHTML = "Is Fast: " + IsFast();
            let foodsCountLabel = document.getElementById("foods-count");
            foodsCountLabel.innerHTML = "Foods Count: " + Foods.length;
            let foodsLabel = document.getElementById("favorite-foods");
            foodsLabel.innerHTML = "Foods: " + Foods.toString();
            let firstFoodLabel = document.getElementById("first-food");
            firstFoodLabel.innerHTML = "First Food: " + FirstFood.toString();
            let secondFoodLabel = document.getElementById("second-food");
            secondFoodLabel.innerHTML = "Second Food: " + SecondFood.toString();
            let totalYearsWonLabel = document.getElementById("total-years-won");
            totalYearsWonLabel.innerHTML = "Years won: " + CountTotalYearsWon(YearsWon);
            let yearsWonLabel = document.getElementById("total-years-won");
            yearsWonLabel.innerHTML = "Years won: " + YearsWon.toString();
            let lastYearWonLabel = document.getElementById("last-year-won");
            lastYearWonLabel.innerHTML = "Last win: " + LastYearWon(YearsWon);
        };
    })(Types = TypeScriptDemos.Types || (TypeScriptDemos.Types = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=primitive.js.map