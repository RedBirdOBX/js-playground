"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Classes;
    (function (Classes) {
        class Car {
            constructor(engine) {
                this.Engine = engine;
            }
            Start() {
                var startTime = new Date();
                return new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDay(), startTime.getHours(), startTime.getMinutes(), startTime.getSeconds()).toString();
            }
            Stop() {
                var endTime = new Date();
                return new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDay(), endTime.getHours(), endTime.getMinutes(), endTime.getSeconds() + 10).toString();
            }
        }
        window.onload = function () {
            var car = new Car("V8 Engine");
            var EngineLabel = document.getElementById("engine-label");
            EngineLabel.innerHTML = "Engine: " + car.Engine;
            var StartLabel = document.getElementById("start-label");
            StartLabel.innerHTML = "Starts: " + car.Start();
            var StopLabel = document.getElementById("stop-label");
            StopLabel.innerHTML = "Stops: " + car.Stop();
        };
    })(Classes = TypeScriptDemos.Classes || (TypeScriptDemos.Classes = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=car.js.map