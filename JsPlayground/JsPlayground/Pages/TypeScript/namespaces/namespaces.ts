/// <reference path="federation.ts" />
/// <reference path="klingons.ts" />

namespace TypeScriptDemos.War
{

    let federationShip = new TypeScriptDemos.Federation.FederationShip("NCC1701", 100, 10);
    let klingonShip = new TypeScriptDemos.Klingon.KlingonShip(100, 4, true);

    class Battleground
    {
        DisplayShips(): string
        {
            let output : string = "<strong>Federation Ship</strong><br />";
            output += "DesignationCode: " + federationShip.DesignationCode + "<br />";
            output += "CrewCount: " + federationShip.CrewCount + "<br />";
            output += "PhaserCount: " + federationShip.PhaserCount + "<br />";
            output += "------<br />";
            output += "<strong>Klingon Ship</strong><br />";
            output += "CrewCount: " + klingonShip.CrewCount + "<br />";
            output += "PhotonTorpedoTubes: " + klingonShip.PhotonTorpedoTubes + "<br />";
            output += "Cloaking: " + klingonShip.CloakGenerator + "<br />";
            return output;
        }

    }

    window.onload = function ()
    {
        let battleground = new Battleground();
        let outputLabel = <HTMLElement>document.getElementById("output");
        outputLabel.innerHTML = battleground.DisplayShips();
    };
}