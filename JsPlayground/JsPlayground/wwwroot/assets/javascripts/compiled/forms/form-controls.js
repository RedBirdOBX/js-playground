"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Forms;
    (function (Forms) {
        class FormControls {
            static GetFormValues() {
                let output = "";
                let demo = document.getElementById("demo");
                let colorsList = document.getElementById("ColorList");
                output += `Color value: ${colorsList.value}, Color text: ${colorsList.selectedOptions[0].text}<br />`;
                let nameText = document.getElementById("NameText");
                output += `Name: ${nameText.value}<br />`;
                let checkbox1Checkbox = document.getElementById("CheckBox1");
                output += `CheckMe checked?: ${checkbox1Checkbox.checked}<br />`;
                let radioSelection = document.querySelector('input[name="RadioGroup1"]:checked');
                output += `Selected Radio: ${radioSelection.value}<br />`;
                demo.innerHTML = output;
            }
        }
        window.onload = function () {
            let testButton = document.getElementById("TestButton");
            testButton.addEventListener("click", FormControls.GetFormValues);
        };
    })(Forms = TypeScriptDemos.Forms || (TypeScriptDemos.Forms = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=form-controls.js.map