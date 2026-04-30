export class InvalidOrderStateError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InvalidOrderStateError";
    }
}

export class InvalidQuantityError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InvalidQuantityError";
    }
}

