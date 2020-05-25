"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var AccessModifiers;
    (function (AccessModifiers) {
        class ClassA {
            constructor() {
                this._field3 = "foobar";
                this.Property1 = "I am Property1.";
            }
        }
        class ClassB extends ClassA {
            constructor() {
                super(...arguments);
                this.Foobar = this._field3;
                this.Property2 = this.Property1;
            }
        }
        window.onload = function () {
            let classB = new ClassB();
            alert(classB.Foobar);
            alert(classB.Property2);
        };
    })(AccessModifiers = TypeScriptDemos.AccessModifiers || (TypeScriptDemos.AccessModifiers = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=basics.js.map