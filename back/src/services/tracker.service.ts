export class TrackingInfo {

    constructor(
        public dmFear = 0,
        public dmActionTokens = 0
    ) {

    }
}

export class TrackerService {

    public static info = new TrackingInfo();

    public static addFear(): void {
        this.info.dmFear++;
    }

    public static rmFear(): void {
        if (this.info.dmFear > 0) {
            this.info.dmFear--;
        }
    }

    public static addActionToken(): void {
        this.info.dmActionTokens++;
    }

    public static rmActionToken(): void {
        if (this.info.dmActionTokens > 0) {
            this.info.dmActionTokens--;
        }
    }

    public static convertToFear(): void {
        if (this.info.dmActionTokens >= 2) {
            this.info.dmActionTokens -= 2;
            this.info.dmFear++;
        }
    }

    public static clear(): void {
        this.info.dmFear = 0;
        this.info.dmActionTokens = 0;
    }
}