namespace TypeScriptDemos.Keywords
{
    class LetExample
    {

        WriteGreeting()
        {
            let greeting: string = "Hello World";
            let a = true;
            if (a)
            {
                // if you turn OFF "noImplicitAny": true, then this is allowed.  var is also allowed.
                // but let with noImplicitAny prevents variables being used out of scope,
                //var greeting = "Hello World";
            }

            console.log(greeting);
            alert(greeting);
        }

    }


    window.onload = function ()
    {
        let greeter = new LetExample();
        greeter.WriteGreeting();
    };

}