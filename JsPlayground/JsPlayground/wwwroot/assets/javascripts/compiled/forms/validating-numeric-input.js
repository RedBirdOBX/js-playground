"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Forms;
    (function (Forms) {
        class FormValidator {
            static IsNumeric(val) {
                if (!parseInt(val)) {
                    return 0;
                }
                return parseInt(val);
            }
            static ValidateForm() {
                let age = document.getElementById("AgeText");
                let demo = document.getElementById("demo");
                let results = FormValidator.IsNumeric(age.value);
                if (results === 0) {
                    demo.innerHTML = "Not a number.  Give me a valid number.";
                }
                else {
                    demo.innerHTML = `Thank you. Age is ${age.value}`;
                }
            }
        }
        window.onload = function () {
            let testButton = document.getElementById("TestButton");
            testButton.addEventListener("click", FormValidator.ValidateForm);
        };
    })(Forms = TypeScriptDemos.Forms || (TypeScriptDemos.Forms = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=validating-numeric-input.js.map