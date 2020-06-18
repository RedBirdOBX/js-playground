"use strict";
let squareIt = (x) => x * x;
let squareItResult = squareIt(16);
let addIt = (a, b) => a + b;
let addItResult = addIt(16, 16);
let greeting = () => "hello!";
let greetingResult = greeting();
let scores = [15, 45, 55, 75, 90];
let highScores;
highScores = scores.filter((element) => {
    if (element > 70) {
        return true;
    }
    return false;
});
window.onload = function () {
    let Example1Label = document.getElementById("example1");
    Example1Label.innerHTML = squareItResult.toString();
    let Example2Label = document.getElementById("example2");
    Example2Label.innerHTML = addItResult.toString();
    let Example3Label = document.getElementById("example3");
    Example3Label.innerHTML = greetingResult.toString();
    let Example4Label = document.getElementById("example4");
    Example4Label.innerHTML = highScores.toString();
};
//# sourceMappingURL=arrow-functions.js.map