import { RollRequest, RollResult, DiceType } from "../models/dice.model"

export class DiceRollService {
    public static roll(userId: string, ask: RollRequest): RollResult {


        switch (ask.type) {
            case DiceType.DH_12:
                return this.rollDH12(userId, ask);
                break;
            case DiceType.D20:
                return this.rollD20(userId, ask);
                break;
        }
    }

    private static rollDH12(userId: string, ask: RollRequest) {

        const hope = this.randomIntFromInterval(1, 12);
        const hope2 = this.randomIntFromInterval(1, 12);
        const fear = this.randomIntFromInterval(1, 12);

        return new RollResult(userId, DiceType.DH_12, hope, fear, ask.modifier, 0, ask.advantage, ask.disadvantage, hope, hope2);
    }

    private static rollD20(userId: string, ask: RollRequest) {
        const res = this.randomIntFromInterval(1, 20);
        return new RollResult(userId, DiceType.D20, 0, 0, ask.modifier, res);
    }

    private static randomIntFromInterval(min: number, max: number): number { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}