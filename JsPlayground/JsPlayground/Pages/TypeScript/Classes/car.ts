namespace TypeScriptDemos.Classes
{
    class Car 
    {
        // properties
        Engine: string;

        // constructor
        constructor(engine: string) 
        {
            this.Engine = engine;
        }

        // functions (methods)
        Start() 
        {
            var startTime = new Date();
            return new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDay(), startTime.getHours(), startTime.getMinutes(), startTime.getSeconds()).toString();
        }

        Stop() {
            var endTime = new Date();
            return new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDay(), endTime.getHours(), endTime.getMinutes(), endTime.getSeconds() + 10).toString();
        }

    }

    window.onload = function () 
    {
        var car = new Car("V8 Engine");

        var EngineLabel = <HTMLElement>document.getElementById("engine-label");
        EngineLabel.innerHTML = "Engine: " + car.Engine;

        var StartLabel = <HTMLElement>document.getElementById("start-label");
        StartLabel.innerHTML = "Starts: " + car.Start();

        var StopLabel = <HTMLElement>document.getElementById("stop-label");
        StopLabel.innerHTML = "Stops: " + car.Stop();
    };

}