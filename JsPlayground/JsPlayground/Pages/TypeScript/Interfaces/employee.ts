// IManager is an extension of IEmployee.
// There is a difference between 'inherits' and 'extends'.
//
// Extends is like a derived class to a base abstract class.
// With Abstracts using 'extends', you do not need to redefine all properties and methods.
// They are automatically inherited into the derived class.
//
// With 'implements', you DO need to define everything in the class which is inhertiting
// the interface.  It is a contract.  Your class MUST look like what you are '​inheriting'.
//
// To avoid confusion, there is NO keyword called inherits like in C#.  You either
// extend an Abstract Class or you implement an Interface.  Both "inherit" stuff.
//
// This manager has FOUR properties. Managers will have a method called ScheduleMeeting. Employees will not.
// Interfaces define the Shape of the object....they enforce a Contract.

namespace TypeScriptDemos.Interfaces
{
     // If I ever want to use employee, here's what it looks like:
    interface IEmployee
    {
        Name: string;
        Title: string;
        Type: string;
    }

    // If I ever want to use manager, here's what it looks like:
    interface IManager extends IEmployee
    {
        Department: string;
        NumberOfEmployees: number;

        ScheduleMeeting: (topic: string) => void;
    }

    class Employee implements IEmployee
    {
        Name: string = "";
        Title: string = "";
        Type: string = "";
    }

    class BossMan implements IManager
    {
        Name: string = "";
        Title: string = "";
        Type: string = "";

        Department: string = "";
        NumberOfEmployees: number = 0;

        ScheduleMeeting(topic: string): void
        {
            // code that does stuff
            console.log(topic);
        }
    }

    window.onload = function ()
    {
        let bossMan = new BossMan();
        bossMan.Name = "Boss Man";
        bossMan.Title = "Boss"
        bossMan.Type = "FTE";
        bossMan.Department = "Service"
        bossMan.NumberOfEmployees = 10;
        bossMan.ScheduleMeeting("My Meeting")
        let bossManLabel: HTMLElement = <HTMLElement>document.getElementById("boss-label");
        bossManLabel.innerHTML = `${bossMan.Name} ${bossMan.Title} of ${bossMan.Department}`

        let employee = new Employee();
        employee.Name = "Nameless Employee";
        employee.Title = "Pee On"
        employee.Type = "PTE"
        let employeeLabel: HTMLElement = <HTMLElement>document.getElementById("employee-label");
        employeeLabel.innerHTML = `${employee.Name} ${employee.Title} : ${employee.Type}`
    };
}