"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Events;
    (function (Events) {
        class ButtonEvents {
            constructor() {
                this._responseMsg = "The button has been clicked.";
            }
            ButtonClicked() {
                let ResultsLabel = document.getElementById("results-label");
                ResultsLabel.innerHTML = this._responseMsg;
            }
        }
        window.onload = function () {
            let buttonEvents = new ButtonEvents();
            let button = document.getElementById("ClickDemoButton");
            button.addEventListener("click", function () {
                buttonEvents.ButtonClicked();
            });
        };
    })(Events = TypeScriptDemos.Events || (TypeScriptDemos.Events = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=events.js.map