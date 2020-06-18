"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Forms;
    (function (Forms) {
        class FormControls {
            static LoopThruFormControls() {
                let form = document.forms[0];
                let demo = document.getElementById("demo");
                let output = "";
                for (let i = 0; i < form.length; i++) {
                    let element = form.elements[i];
                    if (element.name === "CheckBox1") {
                        output += element.checked + "<br />";
                    }
                    else {
                        output += element.value + "<br />";
                    }
                }
                demo.innerHTML = output;
            }
        }
        window.onload = function () {
            let testButton = document.getElementById("TestButton");
            testButton.addEventListener("click", FormControls.LoopThruFormControls);
        };
    })(Forms = TypeScriptDemos.Forms || (TypeScriptDemos.Forms = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=loop-thru-form-controls.js.map