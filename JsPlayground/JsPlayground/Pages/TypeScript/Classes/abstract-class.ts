namespace TypeScriptDemos.Classes
{
    abstract class Vehicle
    {
        //this MUST be defined in the derived class.
        abstract CalculatePassengerCapacity(rows : number) : number
    }

    class Car extends Vehicle
    {
        // define this
        CalculatePassengerCapacity(rows : number) : number
        {
            // there are 2 sets per row
            return rows * 2;
        }
    }

    class Train extends Vehicle
    {
        // define this
        CalculatePassengerCapacity(rows: number): number
        {
            // there are 4 sets per row
            return rows * 4;
        }
    }

    window.onload = function ()
    {
        let car = new Car();
        let carLabel = <HTMLElement>document.getElementById("car-label");
        carLabel.innerHTML = "There are " + car.CalculatePassengerCapacity(2) + " passengers per car.";

        let train = new Train();
        let trainLabel = <HTMLElement>document.getElementById("train-label");
        trainLabel.innerHTML = "There are " + train.CalculatePassengerCapacity(20) + " passengers per train.";
    };

}