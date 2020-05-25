namespace ScriptDemo
{
    class FunctionExample
    {
        Counter: number = 0;

        CalculateStuff(): void
        {
            this.Counter++;
            this.UpdatePage(this.Counter);
        }

        UpdatePage(counter: number): void
        {
            let label: HTMLElement = <HTMLElement>document.getElementById("output");
            label.innerHTML = counter.toString();
        }
    }

    window.onload = function ()
    {
        let functionExample = new FunctionExample();
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("UpdateCounterButton");
        button.addEventListener("click", () => functionExample.CalculateStuff());
    };
}