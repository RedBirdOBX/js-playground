namespace TypeScriptDemos.Challenges
{
    class FibonacciChallenge
    {
        public ShowNumbers()
        {
            let html: string = "";
            let item1: number = 0;
            let item2: number = 1;
            let total: number = item1+ item2;

            for (var i = 1; i <= 50; i++)
            {
                html += "<div> (" + i + ") " + this.NumberWithCommas(total.toString()) + "</div>";
                item1 = item2;
                item2 = total;
                total = item1 + item2;
            }
            return html;
        }

        private NumberWithCommas(x: string) {
            x = x.toString();
            let pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(x))
                x = x.replace(pattern, "$1,$2");
            return x;
        }

    }

    window.onload = function ()
    {
        let challenges = new FibonacciChallenge();
        let html = challenges.ShowNumbers();
        let content : HTMLElement | null = document.getElementById("output");
        content!.innerHTML = html;
    };
}