function ContinueExample(): void
{
    let output: string = "";
    let continueDemoLabel: HTMLElement = <HTMLElement>document.getElementById("continue-demo");

    if (continueDemoLabel !== null)
    {
        for (let i: number = 0; i < 6; i++)
        {
            if (i === 3)
            {
                output += `skipped! <br />`;
                continue;
            }
            output += `The number is ${i} <br />`;
        }
        continueDemoLabel.innerHTML = output;
    }
}

function DoWhileExample(): void
{
    let doWhileDemoLabel = <HTMLElement>document.getElementById("do-while-demo");

    if (doWhileDemoLabel !== null)
    {
        let counter: number = 1;
        let output: string = "";
        do
        {
            output += `<div>${counter}</div>`;
            counter++;
        }
        while (counter < 6);

        doWhileDemoLabel.innerHTML = output;
    }
}

function WhileExample(): void
{
    let whileDemoLabel = <HTMLElement>document.getElementById("while-demo");

    if (whileDemoLabel !== null)
    {
        let counter: number = 1;
        let output: string = "";

        while (counter < 6)
        {
            output += `<div>${counter}</div>`;
            counter++;
        }

        whileDemoLabel.innerHTML = output;
    }
}

function ForInLoopExample1(): void
{
    let colors : object = [ "Red", "Blue", "White", "Green" ];
    let output : string = "";
    let forInDemoLabel = <HTMLElement>document.getElementById("for-in-demo-1");

    if (forInDemoLabel !== null)
    {
        for (let i in colors)
        {
            output += i + "<br />";
        }

        forInDemoLabel.innerHTML = output;
    }
}

function ForOfLoopExample(): void
{
    let colors = ["Red", "Blue", "White", "Green"];
    let output: string = "";
    let forOfDemoLabel = <HTMLElement>document.getElementById("for-of-demo");

    if (forOfDemoLabel !== null)
    {
        for (let i of colors)
        {
            output += i + "<br />";
        }
        forOfDemoLabel.innerHTML = output;
    }
}

function ForLoopExample(): void
{
    // ITI = Initialize. Test, Increment
    let forDemoLabel = <HTMLElement>document.getElementById("for-demo");
    let output : string = "";

    if (forDemoLabel !== null)
    {
        for (var i = 0; i < 5; i++)
        {
            output += `The number is ${i}<br />`;
        }
        forDemoLabel.innerHTML=  output;
    }
}

function NullCheck(): void
{
    let nullCheckDemo = <HTMLElement>document.getElementById("null-check-demo");

    if (nullCheckDemo !== null)
    {
        let age: number = 48;
        let name: string = "Ricky Bobby";
        let ageMsg: string = "Age is null.";
        let nameMsg: string = "Name is null.";

        // tests true when age has been declared.
        if (age) {
            ageMsg = "Age is not null and is " + age + "<br/> ";
        }

        // test true when name has not been defined.
        if (name === undefined) {
            nameMsg = "Name is undefined.";
        }

        // tests true when name has no value but has been defined.
        if (name === null) {
            nameMsg = "Name is null.";
        }

        if (name) {
            nameMsg = "Name is not null and is " + name + ".";
        }
        nullCheckDemo.innerHTML = ageMsg + nameMsg;
    }
}

window.onload = function ()
{
    ContinueExample();
    DoWhileExample();
    WhileExample();
    ForInLoopExample1();
    ForOfLoopExample();
    ForLoopExample();
    NullCheck();
};
