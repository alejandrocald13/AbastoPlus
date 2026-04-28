
export class InvalidMoneyError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InvalidMoneyError";
    }
}

export class CurrencyMismatchError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "CurrencyMismatchError";
    }
}


