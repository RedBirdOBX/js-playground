"use strict";
function ContinueExample() {
    let output = "";
    let continueDemoLabel = document.getElementById("continue-demo");
    if (continueDemoLabel !== null) {
        for (let i = 0; i < 6; i++) {
            if (i === 3) {
                output += `skipped! <br />`;
                continue;
            }
            output += `The number is ${i} <br />`;
        }
        continueDemoLabel.innerHTML = output;
    }
}
function DoWhileExample() {
    let doWhileDemoLabel = document.getElementById("do-while-demo");
    if (doWhileDemoLabel !== null) {
        let counter = 1;
        let output = "";
        do {
            output += `<div>${counter}</div>`;
            counter++;
        } while (counter < 6);
        doWhileDemoLabel.innerHTML = output;
    }
}
function WhileExample() {
    let whileDemoLabel = document.getElementById("while-demo");
    if (whileDemoLabel !== null) {
        let counter = 1;
        let output = "";
        while (counter < 6) {
            output += `<div>${counter}</div>`;
            counter++;
        }
        whileDemoLabel.innerHTML = output;
    }
}
function ForInLoopExample1() {
    let colors = ["Red", "Blue", "White", "Green"];
    let output = "";
    let forInDemoLabel = document.getElementById("for-in-demo-1");
    if (forInDemoLabel !== null) {
        for (let i in colors) {
            output += i + "<br />";
        }
        forInDemoLabel.innerHTML = output;
    }
}
function ForOfLoopExample() {
    let colors = ["Red", "Blue", "White", "Green"];
    let output = "";
    let forOfDemoLabel = document.getElementById("for-of-demo");
    if (forOfDemoLabel !== null) {
        for (let i of colors) {
            output += i + "<br />";
        }
        forOfDemoLabel.innerHTML = output;
    }
}
function ForLoopExample() {
    let forDemoLabel = document.getElementById("for-demo");
    let output = "";
    if (forDemoLabel !== null) {
        for (var i = 0; i < 5; i++) {
            output += `The number is ${i}<br />`;
        }
        forDemoLabel.innerHTML = output;
    }
}
function NullCheck() {
    let nullCheckDemo = document.getElementById("null-check-demo");
    if (nullCheckDemo !== null) {
        let age = 48;
        let name = "Ricky Bobby";
        let ageMsg = "Age is null.";
        let nameMsg = "Name is null.";
        if (age) {
            ageMsg = "Age is not null and is " + age + "<br/> ";
        }
        if (name === undefined) {
            nameMsg = "Name is undefined.";
        }
        if (name === null) {
            nameMsg = "Name is null.";
        }
        if (name) {
            nameMsg = "Name is not null and is " + name + ".";
        }
        nullCheckDemo.innerHTML = ageMsg + nameMsg;
    }
}
window.onload = function () {
    ContinueExample();
    DoWhileExample();
    WhileExample();
    ForInLoopExample1();
    ForOfLoopExample();
    ForLoopExample();
    NullCheck();
};
//# sourceMappingURL=flow-control.js.map