namespace TypeScriptDemos.Keywords
{
    class Animal
    {
        Name: string = "missing";

        constructor(name: string)
        {
            this.Name = name;
        }
    }

    class Cat extends Animal
    {
        ColorOfFur: string = "";

        constructor(name: string, furColor: string)
        {
            super(name);
            this.ColorOfFur = furColor;
        }

        Greeting = () : string => `${this.Name} says meow and his color is ${this.ColorOfFur}.`;
    }

    window.onload = function ()
    {
        let cat = new Cat("Spot", "Orange");
        let superDemo = <HTMLElement>document.getElementById("super-demo");
        superDemo.innerHTML = cat.Greeting();
    };
}
