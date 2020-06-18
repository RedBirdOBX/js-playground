"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Federation;
    (function (Federation) {
        class FederationShip {
            constructor(code, crew, phasers) {
                this.DesignationCode = code;
                this.CrewCount = crew;
                this.PhaserCount = phasers;
            }
            BuildFederationShip() {
                let ship = new FederationShip("NCC1701", 100, 4);
                return ship;
            }
        }
        Federation.FederationShip = FederationShip;
    })(Federation = TypeScriptDemos.Federation || (TypeScriptDemos.Federation = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=federation.js.map