class Thing
{
    Property1: string = "";
    Property2: string = "";
    Property3?: string = "";
}

window.onload = function ()
{
// method 1
let thing1 = new Thing();
thing1.Property1 = "Foo";
thing1.Property2 = "Bar";
thing1.Property3 = "undecided";

// method 2
let thing2: Thing =
{
    Property1: "Foo2",
    Property2: "Bar2",
    Property3: "undecided2",
};

    let thing1Label = <HTMLElement>document.getElementById("thing1-label");
    thing1Label.innerHTML = `${thing1.Property1} ${thing1.Property2} + ${thing1.Property3}`;

    let thing2Label = <HTMLElement>document.getElementById("thing2-label");
    thing2Label.innerHTML = `${thing2.Property1} ${thing2.Property2} + ${thing2.Property3}`;
};