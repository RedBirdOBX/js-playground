"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Forms;
    (function (Forms) {
        class FormUtility {
            static UpdateDisplay() {
                let valueDemo = document.getElementById("demo-value");
                let textDemo = document.getElementById("demo-text");
                let colorsList = document.getElementById("ColorList");
                valueDemo.innerHTML = `Your value is ${colorsList.value}`;
                textDemo.innerHTML = `Your text is ${colorsList.selectedOptions[0].text}`;
            }
        }
        window.onload = function () {
            let colorsList = document.getElementById("ColorList");
            colorsList.addEventListener("change", FormUtility.UpdateDisplay);
        };
    })(Forms = TypeScriptDemos.Forms || (TypeScriptDemos.Forms = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=get-values-from-drop-down.js.map