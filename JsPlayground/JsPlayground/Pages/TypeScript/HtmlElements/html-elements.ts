namespace TypeScriptDemos.HtmlElements
{
    window.onload = function ()
    {
        var greeting: string = "Hello World";

        var MessageLabel = <HTMLElement>document.getElementById("message");
        MessageLabel.innerHTML = greeting;

        var TextBox1 = <HTMLInputElement>document.getElementById("TextBox1");
        TextBox1.value = greeting;
    };
}
