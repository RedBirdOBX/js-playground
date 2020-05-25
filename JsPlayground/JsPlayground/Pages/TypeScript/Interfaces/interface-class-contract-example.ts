namespace TypeScriptDemos.Interfaces
{
    // Surprisingly, the order it important.  Interface first and the the class which implements it.
    // This is what a Spaceship will look like...defined by this contract.
    // My Spaceships will look like this.
    interface ISpaceship
    {
        // Properties
        DesignationCode: string;
        ShipName: string;
        NumberOfWarpNacelles: number;
        NumberOfPassengers: number;
        NumberOfCrew: number;
        CommissionDate: Date;
        DecommissionDate?: Date;

        // signature only - no definition
        DisplaySpecs() : void;
    }

    class BattleCruiser implements ISpaceship
    {
        // Properties
        DesignationCode: string = "";
        ShipName: string = "";
        NumberOfWarpNacelles: number = 0;
        NumberOfPassengers: number = 0;
        NumberOfCrew: number = 0;
        CommissionDate: Date = new Date();

        // unique to battle cruisers
        StorageCapacity: number = 0;
        FuelCapacity: number = 0;

        DecommissionDate?: Date;

        // constructor
        constructor
        (
            // this ctor prob not needed
            designationCode : string,
            shipName : string,
            nacelles : number,
            passengers: number,
            crew: number,
            commissioned : Date,
            storageCubicTons: number,
            fuelStorage: number,
            decommissioned?: Date,
        )
        {
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

        // methods
        DisplaySpecs() : void
        {
            let DesignationLabel = <HTMLElement>document.getElementById("cruiser-designation-label");
            DesignationLabel.innerHTML = "Designation: " + this.DesignationCode;

            let ShipNameLabel = <HTMLElement>document.getElementById("cruiser-ship-name-label");
            ShipNameLabel.innerHTML = "Ship Name: " + this.ShipName;

            let WarpEnginesLabel = <HTMLElement>document.getElementById("cruiser-engines-label");
            WarpEnginesLabel.innerHTML = "Warp Engines: " + this.NumberOfWarpNacelles.toString();

            let PassengersLabel = <HTMLElement>document.getElementById("cruiser-passengers-label");
            PassengersLabel.innerHTML = "Passengers: " + this.NumberOfPassengers.toString();

            let CrewLabel = <HTMLElement>document.getElementById("cruiser-crew-label");
            CrewLabel.innerHTML = "Crew: " + this.NumberOfCrew.toString();

            let CommissionedDateLabel = <HTMLElement>document.getElementById("cruiser-commission-date-label");
            CommissionedDateLabel.innerHTML = "Commission Date: " + this.CommissionDate.toString();

            let StorageCapacityLabel = <HTMLElement>document.getElementById("cruiser-storage-capacity-label");
            StorageCapacityLabel.innerHTML = "Storage Capacity: " + this.StorageCapacity.toString() + " cubic tons";

            let FuelCapacityLabel = <HTMLElement>document.getElementById("cruiser-fuel-capacity-label");
            FuelCapacityLabel.innerHTML = "Fuel Capacity: " + this.FuelCapacity.toString() + " million liters";

            let DecommissionedDateLabel: HTMLElement | null = <HTMLElement>document.getElementById("cruiser-decommission-date-label");
            if(this.DecommissionDate === undefined)
            {
                DecommissionedDateLabel.innerHTML = "";
            }
            else
            {
                DecommissionedDateLabel.innerHTML = this.DecommissionDate!.toString();
            }
        }

    }

    // I can also build on top of it and inherit (implement) the interface to build another Type.
    class Fighter implements ISpaceship
    {
        // Properties
        DesignationCode: string = "";
        ShipName: string = "";
        NumberOfWarpNacelles: number = 0;
        NumberOfPassengers: number = 0;
        NumberOfCrew: number = 0;
        CommissionDate: Date = new Date();

        // unique to fighters
        NumberOfLasers: number;
        NumberOfTorpedoes: number;
        DecommissionDate?: Date;

        // constructor
        constructor
        (
            designationCode: string,
            shipName: string,
            nacelles: number,
            passengers: number,
            crew: number,
            commissioned: Date,
            lasers: number,
            torpedoes: number,
            decommissioned?: Date
        )
        {
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

        // methods
        DisplaySpecs(): void
        {
            let DesignationLabel = <HTMLElement>document.getElementById("fighter-designation-label");
            DesignationLabel.innerHTML = "Designation: " + this.DesignationCode;

            let ShipNameLabel = <HTMLElement>document.getElementById("fighter-ship-name-label");
            ShipNameLabel.innerHTML = "Ship Name: " + this.ShipName;

            let WarpEnginesLabel = <HTMLElement>document.getElementById("fighter-engines-label");
            WarpEnginesLabel.innerHTML = "Warp Engines: " + this.NumberOfWarpNacelles.toString();

            let PassengersLabel = <HTMLElement>document.getElementById("fighter-passengers-label");
            PassengersLabel.innerHTML = "Passengers: " + this.NumberOfPassengers.toString();

            let CrewLabel = <HTMLElement>document.getElementById("fighter-crew-label");
            CrewLabel.innerHTML = "Crew: " + this.NumberOfCrew.toString();

            let CommissionedDateLabel = <HTMLElement>document.getElementById("fighter-commission-date-label");
            CommissionedDateLabel.innerHTML = "Commission Date: " + this.CommissionDate.toString();

            let LasersLabel = <HTMLElement>document.getElementById("fighter-lasers-label");
            LasersLabel.innerHTML = "Laser Cannons: " + this.NumberOfLasers.toString();

            let TorpedoLabel = <HTMLElement>document.getElementById("fighter-torpedos-label");
            TorpedoLabel.innerHTML = "Torpedo Cannons: " + this.NumberOfTorpedoes.toString();

            let DecommissionedDateLabel: HTMLElement | null = <HTMLElement>document.getElementById("fighter-decommission-date-label");
            if (this.DecommissionDate === undefined)
            {
                DecommissionedDateLabel.innerHTML = "x";
            }
            else
            {
                DecommissionedDateLabel.innerHTML = "Decommissioned on: " + this.DecommissionDate!.toString();
            }
        }
    }

    window.onload = function ()
    {
        let battleCruiser = new BattleCruiser("ABC001","Klingon Battle Cruiser",2,20,25,new Date(2200, 7, 30), 50, 25);
        battleCruiser.DisplaySpecs();

        let fighter = new Fighter("NCC-1000","USS Centaur",2,0,1,new Date(2200, 7, 30),4,4,new Date(2250, 7, 30));
        fighter.DisplaySpecs();
    };
}