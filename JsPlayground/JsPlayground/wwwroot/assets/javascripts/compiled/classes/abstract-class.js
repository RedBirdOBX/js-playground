"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Classes;
    (function (Classes) {
        class Vehicle {
        }
        class Car extends Vehicle {
            CalculatePassengerCapacity(rows) {
                return rows * 2;
            }
        }
        class Train extends Vehicle {
            CalculatePassengerCapacity(rows) {
                return rows * 4;
            }
        }
        window.onload = function () {
            let car = new Car();
            let carLabel = document.getElementById("car-label");
            carLabel.innerHTML = "There are " + car.CalculatePassengerCapacity(2) + " passengers per car.";
            let train = new Train();
            let trainLabel = document.getElementById("train-label");
            trainLabel.innerHTML = "There are " + train.CalculatePassengerCapacity(20) + " passengers per train.";
        };
    })(Classes = TypeScriptDemos.Classes || (TypeScriptDemos.Classes = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=abstract-class.js.map