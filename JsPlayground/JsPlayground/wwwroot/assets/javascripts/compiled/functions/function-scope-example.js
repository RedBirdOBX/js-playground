"use strict";
var ScriptDemo;
(function (ScriptDemo) {
    class FunctionExample {
        constructor() {
            this.Counter = 0;
        }
        CalculateStuff() {
            this.Counter++;
            this.UpdatePage(this.Counter);
        }
        UpdatePage(counter) {
            let label = document.getElementById("output");
            label.innerHTML = counter.toString();
        }
    }
    window.onload = function () {
        let functionExample = new FunctionExample();
        let button = document.getElementById("UpdateCounterButton");
        button.addEventListener("click", () => functionExample.CalculateStuff());
    };
})(ScriptDemo || (ScriptDemo = {}));
//# sourceMappingURL=function-scope-example.js.map