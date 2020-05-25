namespace TypeScriptDemos.Keywords
{
    class Spaceship
    {
        readonly Bathrooms : number = 10;
        readonly Passengers : number = 100;
    }

    class Person
    {
        readonly Name : string;
        readonly Age : number;

        constructor(name : string, age: number)
        {
            this.Name = name;
            this.Age = age;
        }

        Greeting() : string
        {
            let msg = "Hello " + this.Name + ". You are " + this.Age + " years old.";
            return msg;
        }

    }

    window.onload = function () {
        let spaceship = new Spaceship();
        let PassengersPerBathroom: number = spaceship.Passengers / spaceship.Bathrooms;

        var readonlyLabel = <HTMLElement>document.getElementById("readonly-label");
        readonlyLabel.innerHTML = "There are " + PassengersPerBathroom.toString() + " passengers for every bathroom.";

        // this causes an error.
        // spaceship.Passengers = 4;

        var person = new Person("Ricky Bobby", 50);
        //person.Age = 50; //<--- error.Is readonly
        //person.Name = "John Doe";  //<--- error. Is readonly

        var readonlyParameterLabel = <HTMLElement>document.getElementById("readonly-parameter-label");
        readonlyParameterLabel.innerHTML = person.Greeting();
    };
}