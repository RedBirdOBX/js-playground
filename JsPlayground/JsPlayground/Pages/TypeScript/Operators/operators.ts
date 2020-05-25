namespace TypeScriptDemos.Operators
{
    class OperatorsExample
    {
        public ModulusTest(loopCounter: number): string {
            let html: string = "<row>";
            for (let i = 1; i <= loopCounter; i++)
            {
                if (i % 4 == 0)
                {
                    html += `<div class=\"col-12 bg-danger\">${i}</div>`;
                }
                else
                {
                    html += `<div class=\"col-12\">${i}</div>`;
                }
            }
            html += "</row>";
            return html;
        }
    }

    window.onload = function ()
    {
        var operatorsExample = new OperatorsExample();
        var html = operatorsExample.ModulusTest(50);
        var content = <HTMLElement>document.getElementById("output");
        content.innerHTML = html;
    };
}