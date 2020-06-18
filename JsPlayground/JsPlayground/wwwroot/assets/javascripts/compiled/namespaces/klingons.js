"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Klingon;
    (function (Klingon) {
        class KlingonShip {
            constructor(crew, photonTubes, cloaking) {
                this.CrewCount = crew;
                this.PhotonTorpedoTubes = photonTubes,
                    this.CloakGenerator = cloaking;
            }
            BuildKlingonShip() {
                let ship = new KlingonShip(100, 4, true);
                return ship;
            }
        }
        Klingon.KlingonShip = KlingonShip;
    })(Klingon = TypeScriptDemos.Klingon || (TypeScriptDemos.Klingon = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=klingons.js.map