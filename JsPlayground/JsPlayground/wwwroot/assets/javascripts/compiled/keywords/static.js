"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Keywords;
    (function (Keywords) {
        class Logger {
            static LogInfo(message) {
                console.log(message);
            }
            static LogError(message) {
                console.error(message);
                Logger.LogInfo("An error occurred...");
            }
        }
        window.onload = function () {
            Logger.LogInfo("hello there");
            Logger.LogError("danger!");
        };
    })(Keywords = TypeScriptDemos.Keywords || (TypeScriptDemos.Keywords = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=static.js.map