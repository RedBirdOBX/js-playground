namespace TypeScriptDemos.Keywords
{
    class Logger
    {
        static LogInfo(message: string): void
        {
            console.log(message);
        }

        static LogError(message: string): void
        {
            console.error(message);

            // see how we call it by using the class name instead of 'this'?
            Logger.LogInfo("An error occurred...");
        }
    }

    window.onload = function ()
    {
        // see how I didn't need to instantiate the class as an object?
        Logger.LogInfo("hello there");
        Logger.LogError("danger!");
    };
}
