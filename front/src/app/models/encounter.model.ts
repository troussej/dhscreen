import { Adversary } from "app/models/adversary.model";

export class Encounter {
    constructor(
        public name = 'Encounter',
        public elements: { [index: string]: EncounterElem } = {},
        public description: String = ''
    ) { }


}

export class EncounterElem {
    constructor(
        public adversaryName: string,
        public id: string,
        public scaling = 0,
        public trackers: HpTracker[] = []
    ) { }


}

export class HpTracker {
    hp = 0;
    stress = 0;
}