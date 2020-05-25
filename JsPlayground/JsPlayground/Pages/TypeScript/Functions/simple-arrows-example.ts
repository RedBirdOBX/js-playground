namespace ScriptDemo
{
    class FunctionExample
    {
        BuildMessage = () : string => { return "Hello World"; };

        ShowMessage = () : void =>
        {
            let label: HTMLElement = <HTMLElement>document.getElementById("message-label");
            label.innerHTML = this.BuildMessage();
        }
    }

    window.onload = function ()
    {
        let functionExample = new FunctionExample();
        functionExample.ShowMessage();
   };
}
