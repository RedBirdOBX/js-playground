"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Challenges;
    (function (Challenges) {
        class FibonacciChallenge {
            ShowNumbers() {
                let html = "";
                let item1 = 0;
                let item2 = 1;
                let total = item1 + item2;
                for (var i = 1; i <= 50; i++) {
                    html += "<div> (" + i + ") " + this.NumberWithCommas(total.toString()) + "</div>";
                    item1 = item2;
                    item2 = total;
                    total = item1 + item2;
                }
                return html;
            }
            NumberWithCommas(x) {
                x = x.toString();
                let pattern = /(-?\d+)(\d{3})/;
                while (pattern.test(x))
                    x = x.replace(pattern, "$1,$2");
                return x;
            }
        }
        window.onload = function () {
            let challenges = new FibonacciChallenge();
            let html = challenges.ShowNumbers();
            let content = document.getElementById("output");
            content.innerHTML = html;
        };
    })(Challenges = TypeScriptDemos.Challenges || (TypeScriptDemos.Challenges = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=fibonacci.js.map