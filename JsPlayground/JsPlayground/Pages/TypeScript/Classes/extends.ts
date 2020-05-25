namespace TypeScriptDemos.Classes
{
    class Animal
    {
        Move(feet : number) : string
        {
            let msg = "I can move " + feet + " feet."
            return msg;
        }
    }

    class Dog extends Animal
    {
        Bark() : string
        {
            let msg = "I can bark.";
            return msg;
        }
    }

    class Cat extends Animal
    {
        Meow() : string
        {
            let msg = "I can meow."
            return msg;
        }
    }

    window.onload = function ()
    {
        let dog = new Dog();
        let dogMoveLabel = <HTMLElement>document.getElementById("dog-move-label");
        dogMoveLabel.innerHTML =  dog.Move(5);

        let dogBarkLabel = <HTMLElement>document.getElementById("dog-bark-label");
        dogBarkLabel.innerHTML = dog.Bark();

        let cat = new Cat();
        let catMoveLabel = <HTMLElement>document.getElementById("cat-move-label");
        catMoveLabel.innerHTML = cat.Move(8);

        let catMeowLabel = <HTMLElement>document.getElementById("cat-meow-label");
        catMeowLabel.innerHTML = cat.Meow();
        
        // nope!
        //catMeowLabel.innerHTML = cat.Bark();
    };
}