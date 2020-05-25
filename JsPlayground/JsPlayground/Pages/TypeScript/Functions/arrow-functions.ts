// {name} = {parameters} => {function body}

// example 1
let squareIt = (x: number) => x * x;
let squareItResult: number = squareIt(16);

// example 2
let addIt = (a: number, b: number) => a + b;
let addItResult: number = addIt(16, 16);

// example 3
let greeting = () => "hello!";
let greetingResult: string = greeting();

// example 4
// since I have multiple lines of code, I need to use curly-braces.
let scores: number[] = [15,45,55,75,90];
let highScores: number[];
highScores = scores.filter((element) =>
{
    if(element > 70)
    {
        return true;
    }
    return false;
});


window.onload = function ()
{
    let Example1Label = <HTMLElement>document.getElementById("example1");
    Example1Label.innerHTML = squareItResult.toString();

    let Example2Label = <HTMLElement>document.getElementById("example2");
    Example2Label.innerHTML = addItResult.toString();

    let Example3Label = <HTMLElement>document.getElementById("example3");
    Example3Label.innerHTML = greetingResult.toString();

    let Example4Label = <HTMLElement>document.getElementById("example4");
    Example4Label.innerHTML = highScores.toString();
};