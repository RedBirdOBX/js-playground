"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Operators;
    (function (Operators) {
        class OperatorsExample {
            ModulusTest(loopCounter) {
                let html = "<row>";
                for (let i = 1; i <= loopCounter; i++) {
                    if (i % 4 == 0) {
                        html += `<div class=\"col-12 bg-danger\">${i}</div>`;
                    }
                    else {
                        html += `<div class=\"col-12\">${i}</div>`;
                    }
                }
                html += "</row>";
                return html;
            }
        }
        window.onload = function () {
            var operatorsExample = new OperatorsExample();
            var html = operatorsExample.ModulusTest(50);
            var content = document.getElementById("output");
            content.innerHTML = html;
        };
    })(Operators = TypeScriptDemos.Operators || (TypeScriptDemos.Operators = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=operators.js.map