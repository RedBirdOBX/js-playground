"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Keywords;
    (function (Keywords) {
        class Animal {
            constructor(name) {
                this.Name = "missing";
                this.Name = name;
            }
        }
        class Cat extends Animal {
            constructor(name, furColor) {
                super(name);
                this.ColorOfFur = "";
                this.Greeting = () => `${this.Name} says meow and his color is ${this.ColorOfFur}.`;
                this.ColorOfFur = furColor;
            }
        }
        window.onload = function () {
            let cat = new Cat("Spot", "Orange");
            let superDemo = document.getElementById("super-demo");
            superDemo.innerHTML = cat.Greeting();
        };
    })(Keywords = TypeScriptDemos.Keywords || (TypeScriptDemos.Keywords = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=super.js.map