namespace TypeScriptDemos.Modules
{
    window.onload = function ()
    {
        let logger = new Logger();
        logger.LogError("this is an error");
        logger.LogInfo("this is a info message");
        document.getElementById("demo1")!.innerHTML = logger.BuildGreeting("Ricky Bobby");
    };
}
