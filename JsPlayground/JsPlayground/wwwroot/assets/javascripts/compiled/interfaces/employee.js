"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Interfaces;
    (function (Interfaces) {
        class Employee {
            constructor() {
                this.Name = "";
                this.Title = "";
                this.Type = "";
            }
        }
        class BossMan {
            constructor() {
                this.Name = "";
                this.Title = "";
                this.Type = "";
                this.Department = "";
                this.NumberOfEmployees = 0;
            }
            ScheduleMeeting(topic) {
                console.log(topic);
            }
        }
        window.onload = function () {
            let bossMan = new BossMan();
            bossMan.Name = "Boss Man";
            bossMan.Title = "Boss";
            bossMan.Type = "FTE";
            bossMan.Department = "Service";
            bossMan.NumberOfEmployees = 10;
            bossMan.ScheduleMeeting("My Meeting");
            let bossManLabel = document.getElementById("boss-label");
            bossManLabel.innerHTML = `${bossMan.Name} ${bossMan.Title} of ${bossMan.Department}`;
            let employee = new Employee();
            employee.Name = "Nameless Employee";
            employee.Title = "Pee On";
            employee.Type = "PTE";
            let employeeLabel = document.getElementById("employee-label");
            employeeLabel.innerHTML = `${employee.Name} ${employee.Title} : ${employee.Type}`;
        };
    })(Interfaces = TypeScriptDemos.Interfaces || (TypeScriptDemos.Interfaces = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=employee.js.map