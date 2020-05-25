namespace TypeScriptDemos.Interfaces
{
    class Spaceship
    {
        DisplaySpaceship(config: ISpaceshipConfiguration)
        {
            var DesignationLabel = <HTMLElement>document.getElementById("designation-label");
            DesignationLabel.innerHTML = "Designation: " + config.DesignationCode;

            var NameLabel = <HTMLElement>document.getElementById("name-label");
            NameLabel.innerHTML = "Name: " + config.ShipName;

            var WarpEnginesLabel = <HTMLElement>document.getElementById("engines-label");
            WarpEnginesLabel.innerHTML = "Warp Engines: " + config.NumberOfWarpNacelles.toString();

            var PassengersLabel = <HTMLElement>document.getElementById("passengers-label");
            PassengersLabel.innerHTML = "Passengers: " + config.NumberOfPassengers.toString();

            var CrewLabel = <HTMLElement>document.getElementById("crew-label");
            CrewLabel.innerHTML = "Crew: " + config.NumberOfCrew.toString();

            var CommissionedDateLabel = <HTMLElement>document.getElementById("commission-date-label");
            CommissionedDateLabel.innerHTML = "Commission Date: " + config.CommissionDate.toString();

            var DecommissionedDateLabel = <HTMLElement>document.getElementById("decommission-date-label");
            DecommissionedDateLabel.innerHTML = "Decommission Date: " + config.DecommissionDate;
        }
    }

    interface ISpaceshipConfiguration
    {
        // Properties
        DesignationCode: string;
        ShipName: string;
        NumberOfWarpNacelles: number;
        NumberOfPassengers: number;
        NumberOfCrew: number;
        CommissionDate: Date;
        DecommissionDate?: Date;        // this is nullable because not all ships have a decommissioned date.
    }

    window.onload = function ()
    {
        let spaceshipConfig = { DesignationCode: "NCC1701", ShipName : "Enterprise", NumberOfWarpNacelles: 2 , NumberOfPassengers : 1000, NumberOfCrew: 100, CommissionDate: new Date(2200, 7, 30)};
        let spaceship = new Spaceship();
        spaceship.DisplaySpaceship(spaceshipConfig);
    };
}