import { InvalidMoneyError, CurrencyMismatchError } from "./money-error";




export default class Money {
    public amount: number;
    public currency: string;

    constructor(amount: number, currency: string) {
        this.amount = amount;
        this.currency = currency;
    }

    public static create(amount: number, currency: string): Money {
        if (amount < 0) {
            throw new InvalidMoneyError("Amount cannot be negative");
        }
        return new Money(amount, currency);
    }

    public add(secondMoney: Money): Money {
        if (this.currency !== secondMoney.currency) {
            throw new CurrencyMismatchError("Cannot add money with different currencies");
        }
        return new Money(this.amount + secondMoney.amount, this.currency);
    }

    public equals(secondMoney: Money): boolean {
        if (this.currency !== secondMoney.currency) {
            throw new CurrencyMismatchError("Cannot compare money with different currencies");
        }
        return this.amount === secondMoney.amount;
    }

}

