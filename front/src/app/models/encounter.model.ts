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
        public adversary: Adversary,
        public id: string,
        public scaling = 0,
        public size = 0,
    ) { }


}