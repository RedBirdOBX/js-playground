namespace TypeScriptDemos.AccessModifiers
{
    class ClassA
    {
        // fields
        // private readonly _field1: string = "foo";
        // private readonly _field2: string = "bar";
        protected readonly _field3: string = "foobar";

        //properties
        Property1 : string = "I am Property1.";
    }

     class ClassB extends ClassA
     {
        // ClassB inhertits ClassA...it is called `extends` in ts. 
        // If you want to use any props or fields from the base class, ClassA, you need to protect it (if they are to be private & readonly).
        // Notice how this field can ONLY access a protected field from ClassA.
         // If you try to use one of the private ones, you will get an error.
        Foobar: string = this._field3;
        Property2: string = this.Property1;

        // Doesn't work. Not protected.
        // Foo : string = this._field1;  <-- nope!!
     }

    window.onload = function ()
    {
        let classB = new ClassB();
        alert(classB.Foobar);
        alert(classB.Property2);
    };
}