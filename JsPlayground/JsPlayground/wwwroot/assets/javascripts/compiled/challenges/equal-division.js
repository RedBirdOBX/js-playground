"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Challenges;
    (function (Challenges) {
        function AlternatingTest() {
            let numbersText = document.getElementById("NumbersText");
            let numbers = numbersText.value.split(",").map(Number);
            let sortedOriginalDescending = numbers.sort(function (a, b) { return b - a; });
            let bucket1 = [];
            let total1 = 0;
            let demo1 = document.getElementById("demo1");
            let bucket2 = [];
            let total2 = 0;
            console.clear();
            console.log(`numbers sorted by desc: ${sortedOriginalDescending.toString()}`);
            for (let i = 0; i < sortedOriginalDescending.length; i++) {
                if (bucket1.length < bucket2.length) {
                    console.log(`adding to bucket1 ${sortedOriginalDescending[i]}`);
                    bucket1.push(sortedOriginalDescending[i]);
                    total1 += sortedOriginalDescending[i];
                }
                else {
                    console.log(`adding to bucket2 ${sortedOriginalDescending[i]}`);
                    bucket2.push(sortedOriginalDescending[i]);
                    total2 += sortedOriginalDescending[i];
                }
            }
            demo1.innerHTML = `<strong>Bucket 1</strong><br />${bucket1.toString()}<br />Total: ${total1}<br /><br /><strong>Bucket 2</strong><br />${bucket2.toString()}<br />Total: ${total2}<br /><br /><strong>Total All: ${total1 + total2}</strong>`;
        }
        function DivideByTwoSpilt() {
            let numbersText = document.getElementById("NumbersText");
            let numbers = numbersText.value.split(",").map(Number);
            let sortedOriginalDescending = numbers.sort(function (a, b) { return b - a; });
            let allTotal = 0;
            let total1 = 0;
            let total2 = 0;
            let bucket1 = [];
            let bucket2 = [];
            let breakpoint = 0;
            let demo2 = document.getElementById("demo2");
            console.clear();
            console.log(`numbers sorted by desc: ${sortedOriginalDescending.toString()}`);
            for (let i = 0; i < numbers.length; i++) {
                allTotal += numbers[i];
            }
            breakpoint = allTotal / 2;
            for (let i = 0; i < sortedOriginalDescending.length; i++) {
                if (total1 <= breakpoint) {
                    console.log(`adding to bucket1: ${sortedOriginalDescending[0]}`);
                    bucket1.push(sortedOriginalDescending[i]);
                    total1 += sortedOriginalDescending[i];
                }
                else {
                    console.log(`adding to bucket2: ${sortedOriginalDescending[0]}`);
                    bucket2.push(sortedOriginalDescending[i]);
                    total2 += sortedOriginalDescending[i];
                }
            }
            demo2.innerHTML = `<strong>Bucket 1</strong><br />${bucket1.toString()}<br />Total: ${total1}<br /><br /><strong>Bucket 2</strong><br />${bucket2.toString()}<br />Total: ${total2}<br /><br /><strong>Total All: ${allTotal}</strong>`;
        }
        function CherryPickTest() {
            let numbersText = document.getElementById("NumbersText");
            let numbers = numbersText.value.split(",").map(Number);
            let sortedOriginal = numbers.sort(function (a, b) { return b - a; });
            let howManyLeft = sortedOriginal.length;
            let bucket1 = [];
            let bucket2 = [];
            let bucket1Total = 0;
            let bucket2Total = 0;
            let demo3 = document.getElementById("demo3");
            console.clear();
            console.log(`numbers sorted by desc: ${sortedOriginal.toString()}`);
            do {
                if (bucket1Total <= bucket2Total) {
                    console.log(`adding to bucket1: ${sortedOriginal[0]}`);
                    bucket1.push(sortedOriginal[0]);
                    bucket1Total += sortedOriginal[0];
                    sortedOriginal.shift();
                    sortedOriginal.reverse();
                }
                else {
                    console.log(`adding to bucket2: ${sortedOriginal[0]}`);
                    bucket2.push(sortedOriginal[0]);
                    bucket2Total += sortedOriginal[0];
                    sortedOriginal.shift();
                    sortedOriginal.reverse();
                }
                howManyLeft = sortedOriginal.length;
            } while (howManyLeft > 0);
            demo3.innerHTML = `<strong>Bucket 1</strong><br />${bucket1.toString()}<br />Total: ${bucket1Total}<br /><br /><strong>Bucket 2</strong><br />${bucket2.toString()}<br />Total: ${bucket2Total}<br /><br /><strong>Total All: ${bucket1Total + bucket2Total}</strong>`;
        }
        window.onload = function () {
            let button1 = document.getElementById("Button1");
            button1.addEventListener("click", AlternatingTest);
            let button2 = document.getElementById("Button2");
            button2.addEventListener("click", DivideByTwoSpilt);
            let button3 = document.getElementById("Button3");
            button3.addEventListener("click", CherryPickTest);
        };
    })(Challenges = TypeScriptDemos.Challenges || (TypeScriptDemos.Challenges = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=equal-division.js.map