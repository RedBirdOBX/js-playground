"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Keywords;
    (function (Keywords) {
        class Spaceship {
            constructor() {
                this.Bathrooms = 10;
                this.Passengers = 100;
            }
        }
        class Person {
            constructor(name, age) {
                this.Name = name;
                this.Age = age;
            }
            Greeting() {
                let msg = "Hello " + this.Name + ". You are " + this.Age + " years old.";
                return msg;
            }
        }
        window.onload = function () {
            let spaceship = new Spaceship();
            let PassengersPerBathroom = spaceship.Passengers / spaceship.Bathrooms;
            var readonlyLabel = document.getElementById("readonly-label");
            readonlyLabel.innerHTML = "There are " + PassengersPerBathroom.toString() + " passengers for every bathroom.";
            var person = new Person("Ricky Bobby", 50);
            var readonlyParameterLabel = document.getElementById("readonly-parameter-label");
            readonlyParameterLabel.innerHTML = person.Greeting();
        };
    })(Keywords = TypeScriptDemos.Keywords || (TypeScriptDemos.Keywords = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=readonly.js.map