"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Modules;
    (function (Modules) {
        window.onload = function () {
            let logger = new Modules.Logger();
            logger.LogError("this is an error");
            logger.LogInfo("this is a info message");
            document.getElementById("demo1").innerHTML = logger.BuildGreeting("Ricky Bobby");
        };
    })(Modules = TypeScriptDemos.Modules || (TypeScriptDemos.Modules = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Modules;
    (function (Modules) {
        class Logger {
            LogInfo(message) {
                console.log(message);
            }
            LogError(message) {
                console.error(message);
            }
            BuildGreeting(name) {
                return `Hello ${name}.`;
            }
        }
        Modules.Logger = Logger;
    })(Modules = TypeScriptDemos.Modules || (TypeScriptDemos.Modules = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=export-example.js.map