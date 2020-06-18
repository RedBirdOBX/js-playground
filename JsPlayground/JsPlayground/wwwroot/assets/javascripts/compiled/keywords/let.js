"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Keywords;
    (function (Keywords) {
        class LetExample {
            WriteGreeting() {
                let greeting = "Hello World";
                let a = true;
                if (a) {
                }
                console.log(greeting);
                alert(greeting);
            }
        }
        window.onload = function () {
            let greeter = new LetExample();
            greeter.WriteGreeting();
        };
    })(Keywords = TypeScriptDemos.Keywords || (TypeScriptDemos.Keywords = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=let.js.map