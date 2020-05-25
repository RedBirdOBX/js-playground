namespace TypeScriptDemos.Keywords
{
    const _message: string = "Hello World";

    window.onload = function ()
    {
        let messageLabel = <HTMLElement>document.getElementById("message-label");
        messageLabel.innerHTML = _message;

        // notice that you cannot reassign this.
        //_message = "new text here";
        //messageLabel.innerHTML = _message;
    };
}
