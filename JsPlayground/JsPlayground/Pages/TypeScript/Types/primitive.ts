namespace TypeScriptDemos.Types
{
    let Name: string = "Ricky Bobby";
    let Age: number = 50;
    let IsDriver: boolean = true;
    let Foods: string[] = ["Twinkies", "Potato Chips", "Tacos", "Burritos"];
    let FirstFood: string = Foods[0];
    let SecondFood: string = Foods[1];
    let YearsWon: number[] = [2005, 2008, 2010, 2011];
    let IsFast = function () {
        // some logic here
        return true;
    };


    function CountTotalYearsWon(YearsWon: number[]) {
        let results: number = YearsWon.length;
        return results;
    }

    function LastYearWon(YearsWon: number[]) {
        let results: number = YearsWon[YearsWon.length - 1];
        return results;
    }

    window.onload = function () {
        let nameLabel = <HTMLElement>document.getElementById("driver-name");
        nameLabel.innerHTML = "Name: " + Name;

        let ageLabel = <HTMLElement>document.getElementById("driver-age");
        ageLabel.innerHTML = "Age: " + Age;

        let isDriverLabel = <HTMLElement>document.getElementById("driver-isDriver");
        isDriverLabel.innerHTML = "Is Driver: " + IsDriver;

        let isFastLabel = <HTMLElement>document.getElementById("driver-isFast");
        isFastLabel.innerHTML = "Is Fast: " + IsFast();

        let foodsCountLabel = <HTMLElement>document.getElementById("foods-count");
        foodsCountLabel.innerHTML = "Foods Count: " + Foods.length;

        let foodsLabel = <HTMLElement>document.getElementById("favorite-foods");
        foodsLabel.innerHTML = "Foods: " + Foods.toString();

        let firstFoodLabel = <HTMLElement>document.getElementById("first-food");
        firstFoodLabel.innerHTML = "First Food: " + FirstFood.toString();

        let secondFoodLabel = <HTMLElement>document.getElementById("second-food");
        secondFoodLabel.innerHTML = "Second Food: " + SecondFood.toString();

        let totalYearsWonLabel = <HTMLElement>document.getElementById("total-years-won");
        totalYearsWonLabel.innerHTML = "Years won: " + CountTotalYearsWon(YearsWon);

        let yearsWonLabel = <HTMLElement>document.getElementById("total-years-won");
        yearsWonLabel.innerHTML = "Years won: " + YearsWon.toString();

        let lastYearWonLabel = <HTMLElement>document.getElementById("last-year-won");
        lastYearWonLabel.innerHTML = "Last win: " + LastYearWon(YearsWon);
    };
}

