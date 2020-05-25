///<reference path="spaceship-lib.ts" />

namespace TypeScriptDemos.ReferenceFiles
{
    window.onload = function ()
    {
        let spaceship = new SpaceshipReferenceDemo();
        let content = <HTMLElement>document.getElementById("reference-demo-label");
        content.innerHTML = "Number of Decks: " + spaceship.NumberOfDecks.toString() + "<br />Number of Engines: " + spaceship.NumberOfEngines.toString();
    };
}
