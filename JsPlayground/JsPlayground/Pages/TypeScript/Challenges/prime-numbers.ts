namespace TypeScriptDemos.Challenges
{
    class PrimeNumbersChallenge
    {
        ShowPrimeNumbers(): void
        {
            let numbersText: HTMLInputElement = <HTMLInputElement>document.getElementById("NumbersText");
            let loops: number = parseInt(numbersText.value);
            let html: string = "";
            let output: HTMLElement | null = document.getElementById("output");

            for (var i = 1; i <= loops; i++)
            {
                console.log("testing " + i);
                if (PrimeNumbersChallenge.IsPrimeNumber(i))
                {
                    html += i + "<br />";
                }
            }

            output!.innerHTML = html;
        }

        // https://stackoverflow.com/questions/40200089/javascript-number-prime-test
        // https://www.thepolyglotdeveloper.com/2015/04/determine-if-a-number-is-prime-using-javascript/

        static IsPrimeNumber(numberToCheck: number): boolean
        {
            // we start at two because we know a number WILL be divisible by itself and ONE
            // this will not test true until #3 loop
            for (var i = 2; i < numberToCheck; i++)
            {
                console.log("\t(is " + i + " < " + numberToCheck + ")");

                console.log("\t\t(checking to see if " + numberToCheck + " % " + i + "===0)");

                if (numberToCheck % i === 0)
                {
                    // on #3, this test to be false.
                    // 3 % 2 !== 0  !!
                    // this if statement is not entered.

                    // on #4, this returns false right away.  4 % 2 === 0! <-- true. is NOT prime.

                    console.log("\t\tfalse...has NO remainder");
                    return false
                }

            }

            // on #2 & #3, this will return true.  Both conditions are met. #3 IS prime
            return numberToCheck !== 1 && numberToCheck !== 0;
        }
    }

    window.onload = function ()
    {
        let challenges = new PrimeNumbersChallenge();
        let button: HTMLElement = <HTMLElement>document.getElementById("TestButton");
        button.addEventListener("click", challenges.ShowPrimeNumbers);
    };
}