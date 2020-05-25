namespace TypeScriptDemos.Federation
{
    export class FederationShip
    {
        DesignationCode: string;
        CrewCount: number;
        PhaserCount: number;

        constructor(code: string, crew: number, phasers: number)
        {
            this.DesignationCode = code;
            this.CrewCount = crew;
            this.PhaserCount = phasers;
        }

        BuildFederationShip(): FederationShip
        {
            let ship = new FederationShip("NCC1701", 100, 4);
            return ship;
        }
    }
}
