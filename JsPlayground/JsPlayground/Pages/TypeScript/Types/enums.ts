namespace TypeScriptDemos.Enums
{
    enum MovieRatings
    {
        Bad = 1,
        PrettyBad,
        Fair,
        PrettyGood,
        Excellent
    }

    enum Responses
    {
        False,
        True
    }

    enum Directions
    {
        Up = "UP",
        Down = "DOWN",
        Right = "RIGHT",
        Left = "LEFT"
    }

    enum DisplaySize
    {
        Small = 4,
        Medium = 8,
        Large = 12
    }

    function MakeDirectionsList() : string
    {
        // will create a string-array.
        let directions : string[] = [Directions.Up, Directions.Down, Directions.Right, Directions.Left];
        let response : string = "";
        directions.forEach(element =>
        {
            response += element + ", ";
        });

        return response.substr(0, response.length - 2);
    }

    function MakeColumns(numberOfColumns : number) : string
    {
        switch(numberOfColumns)
        {
            case DisplaySize.Small:
                return "<div class=\"bg-info col-4\">One Column</div>";
            case DisplaySize.Medium:
                return "<div class=\"bg-info col-4\">Two Columns</div><div class=\"bg-warning col-4\">Two Columns</div>";
            case DisplaySize.Large:
                return "<div class=\"bg-info col-4\">Three Columns</div><div class=\"bg-warning col-4\">Three Columns</div><div class=\"bg-success col-4\">Three Columns</div>";
            default:
                return "1";
        }

    }

    window.onload = function ()
    {
        let ratingsLabel = <HTMLElement>document.getElementById("ratings-label");
        ratingsLabel.innerHTML = "Fair Rating: " + MovieRatings.Fair;

        let responsesLabel = <HTMLElement>document.getElementById("responses-label");
        responsesLabel.innerHTML = "False Response: " + Responses.False;

        let directionsLabel = <HTMLElement>document.getElementById("directions-label");
        directionsLabel.innerHTML = "Right Direction: " + Directions.Right;

        let allDirectionsLabel = <HTMLElement>document.getElementById("all-directions-label");
        allDirectionsLabel.innerHTML = "Directions: " + MakeDirectionsList();

        let displaySizeExampleLabel = <HTMLElement>document.getElementById("display-output");
        displaySizeExampleLabel.innerHTML = MakeColumns(DisplaySize.Medium);
    };
}