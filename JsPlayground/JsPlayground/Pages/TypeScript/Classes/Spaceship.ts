namespace TypeScriptDemos.Classes
{

    class Spaceship
    {
        // fields
        private _designationCode: string = "";
        private _shipName: string = "";
        private _numberOfWarpNacelles: number = 0;
        private _numberOfPassengers: number = 0;
        private _numberOfCrew: number = 0;

        private _secretSecurityCode: string = "alpha111"; //never should be shown or changed.

        // properties - these are what you want expose publicly.
        get designationCode(): string { return this._designationCode; }
        set designationCode(value: string)
        {
            if ((value == undefined) || (value === ""))
            {
                value = "Designation Code needed.";
                throw "Designation Code needed.";
            }
            else
            {
                this._designationCode = value;
            }
        }

        get shipName(): string
        { return this._shipName; }
        set shipName(value: string)
        {
            if ((value == undefined) || (value == ""))
            { throw "Ship Name needed."; }
            this._shipName = value;
        }

        get numberOfWarpNacelles(): number
        { return this._numberOfWarpNacelles; }
        set numberOfWarpNacelles(value: number)
        {
            if ((value == undefined) || (value == 0))
            { throw "Number of Warp Nacelles needed."; }
            this._numberOfWarpNacelles = value;
        }

        get numberOfPassengers(): number
        { return this._numberOfPassengers; }
        set numberOfPassengers(value: number)
        {
            if ((value == undefined) || (value == 0))
            { throw "Number of Passengers needed."; }
            this._numberOfPassengers = value;
        }

        get numberOfCrew(): number { return this._numberOfCrew; }
        set numberOfCrew(value: number)
        {
            if ((value == undefined) || (value == 0))
             { throw "Number of Crew needed."; }
            this._numberOfCrew = value;
        }


        // constructor
        constructor(DesignationCode: string, ShipName: string, NumberOfWarpNacelles: number, NumberOfPassengers: number, NumberOfCrew: number) {
            this.designationCode = DesignationCode;
            this.shipName = ShipName;
            this.numberOfWarpNacelles = NumberOfWarpNacelles;
            this.numberOfPassengers = NumberOfPassengers;
            this.numberOfCrew = NumberOfCrew;
        }

        FillLabels()
        {
            if (this._secretSecurityCode.length > 0)
            {
                // do secret stuff.
            }

            var DesignationLabel = <HTMLElement>document.getElementById("designation-label");
            DesignationLabel.innerHTML = "Designation: " + this._designationCode;

            var NameLabel = <HTMLElement>document.getElementById("name-label");
            NameLabel.innerHTML = "Name: " + this._shipName;

            var WarpEnginesLabel = <HTMLElement>document.getElementById("engines-label");
            WarpEnginesLabel.innerHTML = "Warp Engines: " + this._numberOfWarpNacelles.toString();

            var PassengersLabel = <HTMLElement>document.getElementById("passengers-label");
            PassengersLabel.innerHTML = "Passengers: " + this._numberOfPassengers.toString();

            var CrewLabel = <HTMLElement>document.getElementById("crew-label");
            CrewLabel.innerHTML = "Crew: " + this._numberOfCrew.toString();
        }
    }

    window.onload = function ()
    {
        var designationCode = "NCC-1701A";
        var shipName = "USS Enterprise";
        var numberofWarpNacelles = 2;
        var numberOfPassengers = 100;
        var numberOfCrew = 15;
        var spaceship = new Spaceship(designationCode, shipName, numberofWarpNacelles, numberOfPassengers, numberOfCrew);
        spaceship.FillLabels();
    };
}
