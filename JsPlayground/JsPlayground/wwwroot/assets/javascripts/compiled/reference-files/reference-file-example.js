"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var ReferenceFiles;
    (function (ReferenceFiles) {
        class SpaceshipReferenceDemo {
            constructor() {
                this.NumberOfDecks = 10;
                this.NumberOfEngines = 4;
            }
        }
        ReferenceFiles.SpaceshipReferenceDemo = SpaceshipReferenceDemo;
    })(ReferenceFiles = TypeScriptDemos.ReferenceFiles || (TypeScriptDemos.ReferenceFiles = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var ReferenceFiles;
    (function (ReferenceFiles) {
        window.onload = function () {
            let spaceship = new ReferenceFiles.SpaceshipReferenceDemo();
            let content = document.getElementById("reference-demo-label");
            content.innerHTML = "Number of Decks: " + spaceship.NumberOfDecks.toString() + "<br />Number of Engines: " + spaceship.NumberOfEngines.toString();
        };
    })(ReferenceFiles = TypeScriptDemos.ReferenceFiles || (TypeScriptDemos.ReferenceFiles = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=reference-file-example.js.map