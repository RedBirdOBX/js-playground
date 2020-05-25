namespace TypeScriptDemos.Forms
{
    class FormValidator
    {
        static IsNumeric(val: string): number
        {
            if (!parseInt(val))
            {
                return 0;
            }
            return parseInt(val);
        }

        static ValidateForm()
        {
            let age: HTMLInputElement = <HTMLInputElement>document.getElementById("AgeText");
            let demo: HTMLElement = <HTMLElement>document.getElementById("demo");
            let results: number = FormValidator.IsNumeric(age.value);

            if (results === 0)
            {
                demo.innerHTML = "Not a number.  Give me a valid number."
            }
            else
            {
                demo.innerHTML = `Thank you. Age is ${age.value}`;
            }
        }
    }

    window.onload = function ()
    {
        let testButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("TestButton");
        testButton.addEventListener("click", FormValidator.ValidateForm);
    };
}