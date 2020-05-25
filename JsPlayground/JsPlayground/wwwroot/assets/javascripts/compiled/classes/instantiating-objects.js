"use strict";
class Thing {
    constructor() {
        this.Property1 = "";
        this.Property2 = "";
        this.Property3 = "";
    }
}
window.onload = function () {
    let thing1 = new Thing();
    thing1.Property1 = "Foo";
    thing1.Property2 = "Bar";
    thing1.Property3 = "undecided";
    let thing2 = {
        Property1: "Foo2",
        Property2: "Bar2",
        Property3: "undecided2",
    };
    let thing1Label = document.getElementById("thing1-label");
    thing1Label.innerHTML = `${thing1.Property1} ${thing1.Property2} + ${thing1.Property3}`;
    let thing2Label = document.getElementById("thing2-label");
    thing2Label.innerHTML = `${thing2.Property1} ${thing2.Property2} + ${thing2.Property3}`;
};
//# sourceMappingURL=instantiating-objects.js.map