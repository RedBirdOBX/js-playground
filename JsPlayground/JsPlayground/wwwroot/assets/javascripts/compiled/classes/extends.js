"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Classes;
    (function (Classes) {
        class Animal {
            Move(feet) {
                let msg = "I can move " + feet + " feet.";
                return msg;
            }
        }
        class Dog extends Animal {
            Bark() {
                let msg = "I can bark.";
                return msg;
            }
        }
        class Cat extends Animal {
            Meow() {
                let msg = "I can meow.";
                return msg;
            }
        }
        window.onload = function () {
            let dog = new Dog();
            let dogMoveLabel = document.getElementById("dog-move-label");
            dogMoveLabel.innerHTML = dog.Move(5);
            let dogBarkLabel = document.getElementById("dog-bark-label");
            dogBarkLabel.innerHTML = dog.Bark();
            let cat = new Cat();
            let catMoveLabel = document.getElementById("cat-move-label");
            catMoveLabel.innerHTML = cat.Move(8);
            let catMeowLabel = document.getElementById("cat-meow-label");
            catMeowLabel.innerHTML = cat.Meow();
        };
    })(Classes = TypeScriptDemos.Classes || (TypeScriptDemos.Classes = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=extends.js.map