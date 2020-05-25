namespace TypeScriptDemos.Forms
{
    class FormControls
    {
        static LoopThruFormControls(): void
        {
            let form: HTMLFormElement = <HTMLFormElement>document.forms[0];
            let demo: HTMLElement = <HTMLElement>document.getElementById("demo");
            let output : string = "";
            for (let i: number = 0; i < form.length; i++)
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormControlsCollection
                // https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement
                let element: HTMLFormElement = <HTMLFormElement>form.elements[i];

                if (element.name === "CheckBox1")
                {
                    output += element.checked + "<br />";
                }
                else
                {
                    output += element.value + "<br />";
                }
            }

            // results
            demo.innerHTML = output;
        }
    }

    window.onload = function ()
    {
        let testButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("TestButton");
        testButton.addEventListener("click", FormControls.LoopThruFormControls);
    };
}