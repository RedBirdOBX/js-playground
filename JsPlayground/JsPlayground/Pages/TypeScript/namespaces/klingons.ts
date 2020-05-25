namespace TypeScriptDemos.Klingon
{
    export class KlingonShip
    {
        CrewCount: number;
        PhotonTorpedoTubes: number;
        CloakGenerator: boolean;

        constructor(crew: number, photonTubes: number, cloaking: boolean) {
            this.CrewCount = crew;
            this.PhotonTorpedoTubes = photonTubes,
                this.CloakGenerator = cloaking;
        }

        BuildKlingonShip() : KlingonShip
        {
            let ship = new KlingonShip(100, 4, true);
            return ship;
        }
    }

}
