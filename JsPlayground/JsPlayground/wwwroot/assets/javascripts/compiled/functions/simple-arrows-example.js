"use strict";
var ScriptDemo;
(function (ScriptDemo) {
    class FunctionExample {
        constructor() {
            this.BuildMessage = () => { return "Hello World"; };
            this.ShowMessage = () => {
                let label = document.getElementById("message-label");
                label.innerHTML = this.BuildMessage();
            };
        }
    }
    window.onload = function () {
        let functionExample = new FunctionExample();
        functionExample.ShowMessage();
    };
})(ScriptDemo || (ScriptDemo = {}));
//# sourceMappingURL=simple-arrows-example.js.map