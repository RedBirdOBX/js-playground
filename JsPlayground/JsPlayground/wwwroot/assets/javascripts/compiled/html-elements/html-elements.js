"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var HtmlElements;
    (function (HtmlElements) {
        window.onload = function () {
            var greeting = "Hello World";
            var MessageLabel = document.getElementById("message");
            MessageLabel.innerHTML = greeting;
            var TextBox1 = document.getElementById("TextBox1");
            TextBox1.value = greeting;
        };
    })(HtmlElements = TypeScriptDemos.HtmlElements || (TypeScriptDemos.HtmlElements = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=html-elements.js.map