"use strict";
function GreetingWithNoClass(age, name) {
    var message = "Hello " + name + ". You are " + age + " years old.";
    return message;
}
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Functions;
    (function (Functions) {
        class Examples {
            constructor() {
                this.Greeting4 = function (age, name) {
                    var message = "Hello " + name + ". You are " + age + " years old.";
                    return message;
                };
                this.RandomMath = (x, y) => x + y;
                this.SayHello = function (name) {
                    var Example6Label = document.getElementById("example6");
                    Example6Label.innerHTML = "Hello " + name;
                };
            }
            Greeting2(age, name) {
                var message = "Hello " + name + ". You are " + age + " years old.";
                return message;
            }
            Greeting3(age, name) {
                var message = "Hello " + name + ". You are " + age + " years old.";
                return message;
            }
        }
        window.onload = function () {
            var Example1Label = document.getElementById("example1");
            Example1Label.innerHTML = GreetingWithNoClass(50, "Ricky Bobby");
            var Example2Label = document.getElementById("example2");
            var examples = new Examples();
            Example2Label.innerHTML = examples.Greeting2(50, "Doofenschmirtz");
            var examples = new Examples();
            var age = 45;
            var name = "Ron Burgundy";
            var Example3Label = document.getElementById("example3");
            Example3Label.innerHTML = examples.Greeting3(age, name);
            age = 48;
            name = "Mr. Bean";
            var Example4Label = document.getElementById("example4");
            Example4Label.innerHTML = examples.Greeting4(age, name);
            var Example5Label = document.getElementById("example5");
            Example5Label.innerHTML = "Random math...." + examples.RandomMath(10, 30).toString();
            examples.SayHello("Cooper");
        };
    })(Functions = TypeScriptDemos.Functions || (TypeScriptDemos.Functions = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=function-examples.js.map