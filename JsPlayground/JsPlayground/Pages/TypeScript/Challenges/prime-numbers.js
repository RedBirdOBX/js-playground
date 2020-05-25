"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Challenges;
    (function (Challenges) {
        class PrimeNumbersChallenge {
            ShowPrimeNumbers() {
                let numbersText = document.getElementById("NumbersText");
                let loops = parseInt(numbersText.value);
                let html = "";
                let output = document.getElementById("output");
                for (var i = 1; i <= loops; i++) {
                    console.log("testing " + i);
                    if (PrimeNumbersChallenge.IsPrimeNumber(i)) {
                        html += i + "<br />";
                    }
                }
                output.innerHTML = html;
            }
            static IsPrimeNumber(numberToCheck) {
                for (var i = 2; i < numberToCheck; i++) {
                    console.log("\t(is " + i + " < " + numberToCheck + ")");
                    console.log("\t\t(checking to see if " + numberToCheck + " % " + i + "===0)");
                    if (numberToCheck % i === 0) {
                        console.log("\t\tfalse...has NO remainder");
                        return false;
                    }
                }
                return numberToCheck !== 1 && numberToCheck !== 0;
            }
        }
        window.onload = function () {
            let challenges = new PrimeNumbersChallenge();
            let button = document.getElementById("TestButton");
            button.addEventListener("click", challenges.ShowPrimeNumbers);
        };
    })(Challenges = TypeScriptDemos.Challenges || (TypeScriptDemos.Challenges = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=prime-numbers.js.map