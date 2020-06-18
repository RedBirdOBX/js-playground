"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Interfaces;
    (function (Interfaces) {
        class BattleCruiser {
            constructor(designationCode, shipName, nacelles, passengers, crew, commissioned, storageCubicTons, fuelStorage, decommissioned) {
                this.DesignationCode = "";
                this.ShipName = "";
                this.NumberOfWarpNacelles = 0;
                this.NumberOfPassengers = 0;
                this.NumberOfCrew = 0;
                this.CommissionDate = new Date();
                this.StorageCapacity = 0;
                this.FuelCapacity = 0;
                this.DesignationCode = designationCode;
                this.ShipName = shipName;
                this.NumberOfWarpNacelles = nacelles;
                this.NumberOfPassengers = passengers;
                this.NumberOfCrew = crew;
                this.CommissionDate = commissioned;
                this.StorageCapacity = storageCubicTons;
                this.FuelCapacity = fuelStorage;
                this.DecommissionDate = decommissioned;
            }
            DisplaySpecs() {
                let DesignationLabel = document.getElementById("cruiser-designation-label");
                DesignationLabel.innerHTML = "Designation: " + this.DesignationCode;
                let ShipNameLabel = document.getElementById("cruiser-ship-name-label");
                ShipNameLabel.innerHTML = "Ship Name: " + this.ShipName;
                let WarpEnginesLabel = document.getElementById("cruiser-engines-label");
                WarpEnginesLabel.innerHTML = "Warp Engines: " + this.NumberOfWarpNacelles.toString();
                let PassengersLabel = document.getElementById("cruiser-passengers-label");
                PassengersLabel.innerHTML = "Passengers: " + this.NumberOfPassengers.toString();
                let CrewLabel = document.getElementById("cruiser-crew-label");
                CrewLabel.innerHTML = "Crew: " + this.NumberOfCrew.toString();
                let CommissionedDateLabel = document.getElementById("cruiser-commission-date-label");
                CommissionedDateLabel.innerHTML = "Commission Date: " + this.CommissionDate.toString();
                let StorageCapacityLabel = document.getElementById("cruiser-storage-capacity-label");
                StorageCapacityLabel.innerHTML = "Storage Capacity: " + this.StorageCapacity.toString() + " cubic tons";
                let FuelCapacityLabel = document.getElementById("cruiser-fuel-capacity-label");
                FuelCapacityLabel.innerHTML = "Fuel Capacity: " + this.FuelCapacity.toString() + " million liters";
                let DecommissionedDateLabel = document.getElementById("cruiser-decommission-date-label");
                if (this.DecommissionDate === undefined) {
                    DecommissionedDateLabel.innerHTML = "";
                }
                else {
                    DecommissionedDateLabel.innerHTML = this.DecommissionDate.toString();
                }
            }
        }
        class Fighter {
            constructor(designationCode, shipName, nacelles, passengers, crew, commissioned, lasers, torpedoes, decommissioned) {
                this.DesignationCode = "";
                this.ShipName = "";
                this.NumberOfWarpNacelles = 0;
                this.NumberOfPassengers = 0;
                this.NumberOfCrew = 0;
                this.CommissionDate = new Date();
                this.DesignationCode = designationCode;
                this.ShipName = shipName;
                this.NumberOfWarpNacelles = nacelles;
                this.NumberOfPassengers = passengers;
                this.NumberOfCrew = crew;
                this.CommissionDate = commissioned;
                this.NumberOfLasers = lasers;
                this.NumberOfTorpedoes = torpedoes;
                this.DecommissionDate = decommissioned;
            }
            DisplaySpecs() {
                let DesignationLabel = document.getElementById("fighter-designation-label");
                DesignationLabel.innerHTML = "Designation: " + this.DesignationCode;
                let ShipNameLabel = document.getElementById("fighter-ship-name-label");
                ShipNameLabel.innerHTML = "Ship Name: " + this.ShipName;
                let WarpEnginesLabel = document.getElementById("fighter-engines-label");
                WarpEnginesLabel.innerHTML = "Warp Engines: " + this.NumberOfWarpNacelles.toString();
                let PassengersLabel = document.getElementById("fighter-passengers-label");
                PassengersLabel.innerHTML = "Passengers: " + this.NumberOfPassengers.toString();
                let CrewLabel = document.getElementById("fighter-crew-label");
                CrewLabel.innerHTML = "Crew: " + this.NumberOfCrew.toString();
                let CommissionedDateLabel = document.getElementById("fighter-commission-date-label");
                CommissionedDateLabel.innerHTML = "Commission Date: " + this.CommissionDate.toString();
                let LasersLabel = document.getElementById("fighter-lasers-label");
                LasersLabel.innerHTML = "Laser Cannons: " + this.NumberOfLasers.toString();
                let TorpedoLabel = document.getElementById("fighter-torpedos-label");
                TorpedoLabel.innerHTML = "Torpedo Cannons: " + this.NumberOfTorpedoes.toString();
                let DecommissionedDateLabel = document.getElementById("fighter-decommission-date-label");
                if (this.DecommissionDate === undefined) {
                    DecommissionedDateLabel.innerHTML = "x";
                }
                else {
                    DecommissionedDateLabel.innerHTML = "Decommissioned on: " + this.DecommissionDate.toString();
                }
            }
        }
        window.onload = function () {
            let battleCruiser = new BattleCruiser("ABC001", "Klingon Battle Cruiser", 2, 20, 25, new Date(2200, 7, 30), 50, 25);
            battleCruiser.DisplaySpecs();
            let fighter = new Fighter("NCC-1000", "USS Centaur", 2, 0, 1, new Date(2200, 7, 30), 4, 4, new Date(2250, 7, 30));
            fighter.DisplaySpecs();
        };
    })(Interfaces = TypeScriptDemos.Interfaces || (TypeScriptDemos.Interfaces = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=interface-class-contract-example.js.map