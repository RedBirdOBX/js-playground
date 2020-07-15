"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Enums;
    (function (Enums) {
        let MovieRatings;
        (function (MovieRatings) {
            MovieRatings[MovieRatings["Bad"] = 1] = "Bad";
            MovieRatings[MovieRatings["PrettyBad"] = 2] = "PrettyBad";
            MovieRatings[MovieRatings["Fair"] = 3] = "Fair";
            MovieRatings[MovieRatings["PrettyGood"] = 4] = "PrettyGood";
            MovieRatings[MovieRatings["Excellent"] = 5] = "Excellent";
        })(MovieRatings || (MovieRatings = {}));
        let Responses;
        (function (Responses) {
            Responses[Responses["False"] = 0] = "False";
            Responses[Responses["True"] = 1] = "True";
        })(Responses || (Responses = {}));
        let Directions;
        (function (Directions) {
            Directions["Up"] = "UP";
            Directions["Down"] = "DOWN";
            Directions["Right"] = "RIGHT";
            Directions["Left"] = "LEFT";
        })(Directions || (Directions = {}));
        let DisplaySize;
        (function (DisplaySize) {
            DisplaySize[DisplaySize["Small"] = 4] = "Small";
            DisplaySize[DisplaySize["Medium"] = 8] = "Medium";
            DisplaySize[DisplaySize["Large"] = 12] = "Large";
        })(DisplaySize || (DisplaySize = {}));
        function MakeDirectionsList() {
            let directions = [Directions.Up, Directions.Down, Directions.Right, Directions.Left];
            let response = "";
            directions.forEach(element => {
                response += element + ", ";
            });
            return response.substr(0, response.length - 2);
        }
        function MakeColumns(numberOfColumns) {
            switch (numberOfColumns) {
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
        window.onload = function () {
            let ratingsLabel = document.getElementById("ratings-label");
            ratingsLabel.innerHTML = "Fair Rating: " + MovieRatings.Fair;
            let responsesLabel = document.getElementById("responses-label");
            responsesLabel.innerHTML = "False Response: " + Responses.False;
            let directionsLabel = document.getElementById("directions-label");
            directionsLabel.innerHTML = "Right Direction: " + Directions.Right;
            let allDirectionsLabel = document.getElementById("all-directions-label");
            allDirectionsLabel.innerHTML = "Directions: " + MakeDirectionsList();
            let displaySizeExampleLabel = document.getElementById("display-output");
            displaySizeExampleLabel.innerHTML = MakeColumns(DisplaySize.Medium);
        };
    })(Enums = TypeScriptDemos.Enums || (TypeScriptDemos.Enums = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=enums.js.map