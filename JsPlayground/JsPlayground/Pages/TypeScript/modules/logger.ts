namespace TypeScriptDemos.Modules
{
    export class Logger
    {
        LogInfo(message: string): void
        {
            console.log(message);
        }

        LogError(message: string): void
        {
            console.error(message);
        }

        BuildGreeting(name: string): string
        {
            return `Hello ${name}.`;
        }
    }
}