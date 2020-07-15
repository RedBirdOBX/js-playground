namespace TypeScriptDemos.Forms
{
    class FormControls
    {
        static GetFormValues(): void
        {
            let output: string = "";
            let demo: HTMLElement = <HTMLElement>document.getElementById("demo");

            // drop down
            let colorsList: HTMLSelectElement = <HTMLSelectElement>document.getElementById("ColorList");
            output += `Color value: ${colorsList.value}, Color text: ${colorsList.selectedOptions[0].text}<br />`;

            // text box
            let nameText: HTMLInputElement = <HTMLInputElement>document.getElementById("NameText");
            output += `Name: ${nameText.value}<br />`;

            // checkbox
            let checkbox1Checkbox: HTMLInputElement = <HTMLInputElement>document.getElementById("CheckBox1");
            output += `CheckMe checked?: ${checkbox1Checkbox.checked}<br />`;

            // radios
            // This was a little challenging in ts.
            // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
            // https://stackoverflow.com/questions/9561625/checking-value-of-radio-button-group-via-javascript

            let radioSelection: HTMLInputElement = <HTMLInputElement>document.querySelector('input[name="RadioGroup1"]:checked');
            output += `Selected Radio: ${radioSelection!.value}<br />`;

            // results
            demo.innerHTML = output;
        }
    }

    window.onload = function ()
    {
        let testButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("TestButton");
        testButton.addEventListener("click", FormControls.GetFormValues);
    };
}