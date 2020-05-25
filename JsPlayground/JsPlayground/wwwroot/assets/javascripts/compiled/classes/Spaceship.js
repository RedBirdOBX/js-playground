"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Classes;
    (function (Classes) {
        class Spaceship {
            constructor(DesignationCode, ShipName, NumberOfWarpNacelles, NumberOfPassengers, NumberOfCrew) {
                this._designationCode = "";
                this._shipName = "";
                this._numberOfWarpNacelles = 0;
                this._numberOfPassengers = 0;
                this._numberOfCrew = 0;
                this._secretSecurityCode = "alpha111";
                this.designationCode = DesignationCode;
                this.shipName = ShipName;
                this.numberOfWarpNacelles = NumberOfWarpNacelles;
                this.numberOfPassengers = NumberOfPassengers;
                this.numberOfCrew = NumberOfCrew;
            }
            get designationCode() { return this._designationCode; }
            set designationCode(value) {
                if ((value == undefined) || (value === "")) {
                    value = "Designation Code needed.";
                    throw "Designation Code needed.";
                }
                else {
                    this._designationCode = value;
                }
            }
            get shipName() { return this._shipName; }
            set shipName(value) {
                if ((value == undefined) || (value == "")) {
                    throw "Ship Name needed.";
                }
                this._shipName = value;
            }
            get numberOfWarpNacelles() { return this._numberOfWarpNacelles; }
            set numberOfWarpNacelles(value) {
                if ((value == undefined) || (value == 0)) {
                    throw "Number of Warp Nacelles needed.";
                }
                this._numberOfWarpNacelles = value;
            }
            get numberOfPassengers() { return this._numberOfPassengers; }
            set numberOfPassengers(value) {
                if ((value == undefined) || (value == 0)) {
                    throw "Number of Passengers needed.";
                }
                this._numberOfPassengers = value;
            }
            get numberOfCrew() { return this._numberOfCrew; }
            set numberOfCrew(value) {
                if ((value == undefined) || (value == 0)) {
                    throw "Number of Crew needed.";
                }
                this._numberOfCrew = value;
            }
            FillLabels() {
                if (this._secretSecurityCode.length > 0) {
                }
                var DesignationLabel = document.getElementById("designation-label");
                DesignationLabel.innerHTML = "Designation: " + this._designationCode;
                var NameLabel = document.getElementById("name-label");
                NameLabel.innerHTML = "Name: " + this._shipName;
                var WarpEnginesLabel = document.getElementById("engines-label");
                WarpEnginesLabel.innerHTML = "Warp Engines: " + this._numberOfWarpNacelles.toString();
                var PassengersLabel = document.getElementById("passengers-label");
                PassengersLabel.innerHTML = "Passengers: " + this._numberOfPassengers.toString();
                var CrewLabel = document.getElementById("crew-label");
                CrewLabel.innerHTML = "Crew: " + this._numberOfCrew.toString();
            }
        }
        window.onload = function () {
            var designationCode = "NCC-1701A";
            var shipName = "USS Enterprise";
            var numberofWarpNacelles = 2;
            var numberOfPassengers = 100;
            var numberOfCrew = 15;
            var spaceship = new Spaceship(designationCode, shipName, numberofWarpNacelles, numberOfPassengers, numberOfCrew);
            spaceship.FillLabels();
        };
    })(Classes = TypeScriptDemos.Classes || (TypeScriptDemos.Classes = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=Spaceship.js.map