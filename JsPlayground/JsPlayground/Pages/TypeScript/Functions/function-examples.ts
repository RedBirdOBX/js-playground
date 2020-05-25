// Example 1
function GreetingWithNoClass(age: number, name: string)
{
    var message: string = "Hello " + name + ". You are " + age + " years old.";
    return message;
}

namespace TypeScriptDemos.Functions
{
    class Examples
    {
        // Example 2
        public Greeting2(age: number, name: string)
        {
            var message: string = "Hello " + name + ". You are " + age + " years old.";
            return message;
        }

        // Example 3 - return type explicity defined.
        public Greeting3(age: number, name: string) : string
        {
            var message: string = "Hello " + name + ". You are " + age + " years old.";
            return message;
        }

        // Example 4 - Arrow Function returning anonymous function
        Greeting4: (age: number, name: string) => string = function (age, name)
        {
            var message: string = "Hello " + name + ". You are " + age + " years old.";
            return message;
        };

        // Example 5 - returns a equation using Arrow Function
        RandomMath = (x: number, y: number) => x + y;

        // Example 6 - the Type of SayHello is a **function**
        SayHello: (name: string) => void = function (name)
        {
          var Example6Label = <HTMLElement>document.getElementById("example6");
            Example6Label.innerHTML = "Hello " + name;
        };

    }

    window.onload = function ()
    {
        var Example1Label = <HTMLElement>document.getElementById("example1");
        Example1Label.innerHTML = GreetingWithNoClass(50, "Ricky Bobby");

        var Example2Label = <HTMLElement>document.getElementById("example2");
        var examples = new Examples();
        Example2Label.innerHTML = examples.Greeting2(50, "Doofenschmirtz");

        var examples = new Examples();

        var age: number = 45;
        var name: string = "Ron Burgundy";
        var Example3Label = <HTMLElement>document.getElementById("example3");
        Example3Label.innerHTML = examples.Greeting3(age, name);

        age = 48;
        name = "Mr. Bean";
        var Example4Label = <HTMLElement>document.getElementById("example4");
        Example4Label.innerHTML = examples.Greeting4(age, name);

        var Example5Label = <HTMLElement>document.getElementById("example5");
        Example5Label.innerHTML = "Random math...." + examples.RandomMath(10, 30).toString();

        // Just do it. Example 5
        examples.SayHello("Cooper");
    };
}
