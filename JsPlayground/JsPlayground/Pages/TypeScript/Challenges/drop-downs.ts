namespace TypeScriptDemos.Challenges
{
    class DropDownChallenge
    {
        foods: Array<Food> =
        [
            { Type: "Fruit", Name: "Apple"},
            { Type: "Fruit", Name: "Banana"},
            { Type: "Fruit", Name: "Orange"},
            { Type: "Vegetable", Name: "Carrot" },
            { Type: "Vegetable", Name: "Potato" },
            { Type: "Vegetable", Name: "Cucumber" }
        ];

        BuildFoodTypes(): void
        {
            let uniqueTypes: string[] = new Array();

            // build a list of unique food types
            for (let i = 0; i < this.foods.length; i++)
            {
                if (uniqueTypes.indexOf(this.foods[i].Type) == -1)
                {
                    //add it
                    uniqueTypes.push(this.foods[i].Type);
                }
            }​

            // loop thru unique types and populate drop down
            let foodsList = <HTMLInputElement>document.getElementById("TypesList");
            for (let i = 0; i < uniqueTypes.length; i++)
            {
                let foodOption = uniqueTypes[i];
                let option = document.createElement("option");
                option.textContent = foodOption;
                option.value = foodOption;
                foodsList.appendChild(option);
            }​
        };

        BuildFoodChoices(selection?: string): void
        {
            let uniqueChoices: Food[] = new Array();
            let choicesList = <HTMLInputElement>document.getElementById("ChoicesList");
            let typesList = <HTMLInputElement>document.getElementById("TypesList");

            selection = (selection === null) ? "Fruit" : typesList.value;

            // populate uniqueChoices
            uniqueChoices = this.foods.filter((element) => 
            {
                if (element.Type === selection)
                { 
                    return true; 
                }
                return false;
            });

            // clear ChoicesList
            while (choicesList.firstChild)
            {
                choicesList.removeChild(choicesList.firstChild);
            }

            // loop thru unique choices and populate drop down
            for (let i = 0; i < uniqueChoices.length; i++)
            {
                let foodOption = uniqueChoices[i];
                let option = document.createElement("option");
                option.textContent = foodOption.Name;
                option.value = foodOption.Type;
                choicesList.appendChild(option);
            }​
        }
    }

    window.onload = function ()
    {
        let challenge = new DropDownChallenge();
        let foodsList: HTMLElement | null = document.getElementById("TypesList");

        // populate Types
        challenge.BuildFoodTypes();
        challenge.BuildFoodChoices();

        // wire up Food Types drop down
        foodsList!.addEventListener("change", function ()
        {
            challenge.BuildFoodChoices();
        });
    };

    // ideally, I'd put this class in another file.
    class Food {
        Type: string = "";
        Name: string = "";
    }
}
