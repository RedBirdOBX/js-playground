"use strict";
function SayHello(name, feeling = "good", hungry) {
    console.log("**************************");
    console.log(`Hello ${name}`);
    if (feeling === "good") {
        console.log("I'm glad you are feeling good.");
    }
    else {
        console.log("I hope you feel better.");
    }
    if (hungry !== undefined) {
        console.log(`Are you hungry? ${hungry}`);
    }
}
SayHello("Ricky Bobby", "so-so", true);
SayHello("Ricky Bobby", "so-so");
SayHello("Ricky Bobby");
//# sourceMappingURL=functions-with-default-values.js.map