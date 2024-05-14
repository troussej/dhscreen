export enum DiceType {
    DH_12 = 'DH_12',
    D20 = 'D20'
}

export class RollRequest {
    constructor(

        public type: DiceType,
        public modifier = 0,
        public advantage = false,
        public disadvantage = false,
    ) {
    }
}

export class RollResult {
    constructor(
        public userId: string,
        public type: DiceType,
        public hopeValue = 0,
        public fearValue = 0,
        public modifier = 0,
        public total = 0,
        public advantage = false,
        public disadvantage = false,
        public hopeAdvantageValue1 = 0,
        public hopeAdvantageValue2 = 0,
        public critical = false,
        public isWithHope = false
    ) { }

}