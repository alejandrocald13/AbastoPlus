import ValueObject from "./value-object";

export default class StringValueObject extends ValueObject<string> {
    
    constructor(value: string) {
        super(value);
        
        this.ensureValueIsStr(value)

    }

    private ensureValueIsStr(value: string){
        if (value.length >= 5){
            throw new Error("String must be at least 5 characters")
        }
    }

}