class Quarter
{
    // fields
    private _coinValue: number = 0.25;

    // properties
    // This one is read only
    // The getter's function IS the name of the property!
    get ValueOfCoin() {
        return this._coinValue;
    }
}

