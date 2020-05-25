"use strict";
var TypeScriptDemos;
(function (TypeScriptDemos) {
    var Challenges;
    (function (Challenges) {
        class DropDownChallenge {
            constructor() {
                this.foods = [
                    { Type: "Fruit", Name: "Apple" },
                    { Type: "Fruit", Name: "Banana" },
                    { Type: "Fruit", Name: "Orange" },
                    { Type: "Vegetable", Name: "Carrot" },
                    { Type: "Vegetable", Name: "Potato" },
                    { Type: "Vegetable", Name: "Cucumber" }
                ];
            }
            BuildFoodTypes() {
                let uniqueTypes = new Array();
                for (let i = 0; i < this.foods.length; i++) {
                    if (uniqueTypes.indexOf(this.foods[i].Type) == -1) {
                        uniqueTypes.push(this.foods[i].Type);
                    }
                }
                let foodsList = document.getElementById("TypesList");
                for (let i = 0; i < uniqueTypes.length; i++) {
                    let foodOption = uniqueTypes[i];
                    let option = document.createElement("option");
                    option.textContent = foodOption;
                    option.value = foodOption;
                    foodsList.appendChild(option);
                }
            }
            ;
            BuildFoodChoices(selection) {
                let uniqueChoices = new Array();
                let choicesList = document.getElementById("ChoicesList");
                let typesList = document.getElementById("TypesList");
                selection = (selection === null) ? "Fruit" : typesList.value;
                uniqueChoices = this.foods.filter((element) => {
                    if (element.Type === selection) {
                        return true;
                    }
                    return false;
                });
                while (choicesList.firstChild) {
                    choicesList.removeChild(choicesList.firstChild);
                }
                for (let i = 0; i < uniqueChoices.length; i++) {
                    let foodOption = uniqueChoices[i];
                    let option = document.createElement("option");
                    option.textContent = foodOption.Name;
                    option.value = foodOption.Type;
                    choicesList.appendChild(option);
                }
            }
        }
        window.onload = function () {
            let challenge = new DropDownChallenge();
            let foodsList = document.getElementById("TypesList");
            challenge.BuildFoodTypes();
            challenge.BuildFoodChoices();
            foodsList.addEventListener("change", function () {
                challenge.BuildFoodChoices();
            });
        };
        class Food {
            constructor() {
                this.Type = "";
                this.Name = "";
            }
        }
    })(Challenges = TypeScriptDemos.Challenges || (TypeScriptDemos.Challenges = {}));
})(TypeScriptDemos || (TypeScriptDemos = {}));
//# sourceMappingURL=drop-downs.js.map