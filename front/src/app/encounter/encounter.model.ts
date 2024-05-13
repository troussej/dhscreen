import { Adversary } from "app/adversary/adversary.model";

export class Encounter {
    constructor(
        public adversairies: Adversary[] = [],
        public description: String = ''
    ) { }
}