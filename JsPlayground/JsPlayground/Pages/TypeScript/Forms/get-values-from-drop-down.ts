namespace TypeScriptDemos.Forms
{
    class FormUtility
    {
        static UpdateDisplay(): void
        {
            let valueDemo: HTMLElement = <HTMLElement>document.getElementById("demo-value");
            let textDemo: HTMLElement = <HTMLElement>document.getElementById("demo-text");
            let colorsList: HTMLSelectElement = <HTMLSelectElement>document.getElementById("ColorList");
            valueDemo.innerHTML = `Your value is ${colorsList.value}`;
            textDemo.innerHTML = `Your text is ${colorsList.selectedOptions[0].text}`;
        }
    }

    window.onload = function ()
    {
        let colorsList: HTMLSelectElement = <HTMLSelectElement>document.getElementById("ColorList");
        colorsList.addEventListener("change", FormUtility.UpdateDisplay);
    };
}