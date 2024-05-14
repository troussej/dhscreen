import { RollRequest, RollResult } from "./roll.model";

export class Message {
    constructor(
        public message: string,
        public senderId: string = '',
        public sender: string = '',
        public date = new Date(),
        public roll: RollResult | null = null
    ) {
    }
}

