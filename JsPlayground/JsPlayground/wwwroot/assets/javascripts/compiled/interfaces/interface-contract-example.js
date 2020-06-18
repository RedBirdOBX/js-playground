"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Interfaces;
    (function (Interfaces) {
        class Spaceship {
            DisplaySpaceship(config) {
                var DesignationLabel = document.getElementById("designation-label");
                DesignationLabel.innerHTML = "Designation: " + config.DesignationCode;
                var NameLabel = document.getElementById("name-label");
                NameLabel.innerHTML = "Name: " + config.ShipName;
                var WarpEnginesLabel = document.getElementById("engines-label");
                WarpEnginesLabel.innerHTML = "Warp Engines: " + config.NumberOfWarpNacelles.toString();
                var PassengersLabel = document.getElementById("passengers-label");
                PassengersLabel.innerHTML = "Passengers: " + config.NumberOfPassengers.toString();
                var CrewLabel = document.getElementById("crew-label");
                CrewLabel.innerHTML = "Crew: " + config.NumberOfCrew.toString();
                var CommissionedDateLabel = document.getElementById("commission-date-label");
                CommissionedDateLabel.innerHTML = "Commission Date: " + config.CommissionDate.toString();
                var DecommissionedDateLabel = document.getElementById("decommission-date-label");
                DecommissionedDateLabel.innerHTML = "Decommission Date: " + config.DecommissionDate;
            }
        }
        window.onload = function () {
            let spaceshipConfig = { DesignationCode: "NCC1701", ShipName: "Enterprise", NumberOfWarpNacelles: 2, NumberOfPassengers: 1000, NumberOfCrew: 100, CommissionDate: new Date(2200, 7, 30) };
            let spaceship = new Spaceship();
            spaceship.DisplaySpaceship(spaceshipConfig);
        };
    })(Interfaces = TypeScriptDemos.Interfaces || (TypeScriptDemos.Interfaces = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=interface-contract-example.js.map