namespace TypeScriptDemos.Events
{
    class ButtonEvents
    {
        private _responseMsg: string = "The button has been clicked.";

        ButtonClicked() : void
        {
            let ResultsLabel = <HTMLElement>document.getElementById("results-label");
            ResultsLabel.innerHTML = this._responseMsg;
        }
    }

    window.onload = function ()
    {
        let buttonEvents = new ButtonEvents();
        let button: HTMLElement | null = document.getElementById("ClickDemoButton");

        button!.addEventListener("click", function ()
        {
            buttonEvents.ButtonClicked();
        });
    };
}
