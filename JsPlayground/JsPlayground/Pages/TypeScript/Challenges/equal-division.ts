namespace TypeScriptDemos.Challenges
{

    function AlternatingTest(): void
    {
        let numbersText: HTMLInputElement = <HTMLInputElement>document.getElementById("NumbersText");
        let numbers: Array<number> = numbersText.value.split(",").map(Number);
        let sortedOriginalDescending: Array<number> = numbers.sort(function (a, b) { return b - a });
        let bucket1: Array<number> = [];
        let total1: number = 0;
        let demo1: HTMLElement = <HTMLElement>document.getElementById("demo1");
        let bucket2: Array<number> = [];
        let total2: number = 0;

        console.clear();
        console.log(`numbers sorted by desc: ${sortedOriginalDescending.toString()}`);

        for (let i: number = 0; i < sortedOriginalDescending.length; i++)
        {
            // use bucket1 if it has less entries
            if(bucket1.length < bucket2.length)
            {
                console.log(`adding to bucket1 ${sortedOriginalDescending[i]}`);
                bucket1.push(sortedOriginalDescending[i]);
                total1 += sortedOriginalDescending[i];
            }
            else
            {
                console.log(`adding to bucket2 ${sortedOriginalDescending[i]}`);
                bucket2.push(sortedOriginalDescending[i]);
                total2 += sortedOriginalDescending[i];
            }
        }

        demo1.innerHTML = `<strong>Bucket 1</strong><br />${bucket1.toString()}<br />Total: ${total1}<br /><br /><strong>Bucket 2</strong><br />${bucket2.toString()}<br />Total: ${total2}<br /><br /><strong>Total All: ${total1 + total2}</strong>`;
    }

    function DivideByTwoSpilt(): void
    {
        let numbersText: HTMLInputElement = <HTMLInputElement>document.getElementById("NumbersText");
        let numbers: Array<number> = numbersText.value.split(",").map(Number);
        let sortedOriginalDescending: Array<number> = numbers.sort(function (a, b) { return b - a });
        let allTotal: number = 0;
        let total1: number = 0;
        let total2: number = 0;
        let bucket1: Array<number> = [];
        let bucket2: Array<number> = [];
        let breakpoint: number = 0;
        let demo2: HTMLElement = <HTMLElement>document.getElementById("demo2");

        console.clear();
        console.log(`numbers sorted by desc: ${sortedOriginalDescending.toString()}`);

        for (let i: number = 0; i < numbers.length; i++)
        {
            allTotal += numbers[i];
        }

        breakpoint = allTotal / 2;

        for (let i: number = 0; i < sortedOriginalDescending.length; i++)
        {
            // use bucket1 if it has less entries
            if (total1 <= breakpoint)
            {
                console.log(`adding to bucket1: ${sortedOriginalDescending[0]}`);
                bucket1.push(sortedOriginalDescending[i]);
                total1 += sortedOriginalDescending[i];
            }
            else
            {
                console.log(`adding to bucket2: ${sortedOriginalDescending[0]}`);
                bucket2.push(sortedOriginalDescending[i]);
                total2 += sortedOriginalDescending[i];
            }
        }

        demo2.innerHTML = `<strong>Bucket 1</strong><br />${bucket1.toString()}<br />Total: ${total1}<br /><br /><strong>Bucket 2</strong><br />${bucket2.toString()}<br />Total: ${total2}<br /><br /><strong>Total All: ${allTotal}</strong>`;
    }

    function CherryPickTest(): void
    {
        let numbersText: HTMLInputElement = <HTMLInputElement>document.getElementById("NumbersText");
        let numbers: Array<number> = numbersText.value.split(",").map(Number);
        let sortedOriginal: Array<number> = numbers.sort(function (a, b) { return b - a });
        let howManyLeft: number = sortedOriginal.length;
        let bucket1: Array<number> = [];
        let bucket2: Array<number> = [];
        let bucket1Total: number = 0;
        let bucket2Total: number = 0;
        let demo3: HTMLElement = <HTMLElement>document.getElementById("demo3");

        console.clear();
        console.log(`numbers sorted by desc: ${sortedOriginal.toString()}`);

        do
        {
            // bucket 1
            if (bucket1Total <= bucket2Total)
            {
                console.log(`adding to bucket1: ${sortedOriginal[0]}`);
                bucket1.push(sortedOriginal[0]);
                bucket1Total += sortedOriginal[0];
                sortedOriginal.shift();
                sortedOriginal.reverse();
            }
            //bucket 2
            else
            {
                console.log(`adding to bucket2: ${sortedOriginal[0]}`);
                bucket2.push(sortedOriginal[0]);
                bucket2Total += sortedOriginal[0];
                sortedOriginal.shift();
                sortedOriginal.reverse();
            }

            howManyLeft = sortedOriginal.length;

        }
        while (howManyLeft > 0);

        demo3.innerHTML = `<strong>Bucket 1</strong><br />${bucket1.toString()}<br />Total: ${bucket1Total}<br /><br /><strong>Bucket 2</strong><br />${bucket2.toString()}<br />Total: ${bucket2Total}<br /><br /><strong>Total All: ${bucket1Total + bucket2Total}</strong>`;
    }

    window.onload = function ()
    {
        let button1: HTMLElement = <HTMLElement>document.getElementById("Button1");
        button1.addEventListener("click", AlternatingTest);

        let button2: HTMLElement = <HTMLElement>document.getElementById("Button2");
        button2.addEventListener("click", DivideByTwoSpilt);

        let button3: HTMLElement = <HTMLElement>document.getElementById("Button3");
        button3.addEventListener("click", CherryPickTest);
    }
}