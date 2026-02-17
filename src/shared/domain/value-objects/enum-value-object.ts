import ValueObject from "./value-object";

export default class EnumValueObject extends ValueObject<string> {

    private validValues: string[]
    
    constructor(value: string, validValues: string[]) {
        super(value)
        
        this.validValues = validValues
        
        this.ensureValueIsValid(value)
    }

    private ensureValueIsValid(value: string){
        if (!this.validValues.includes(value)) {
            throw new Error(`The value ${value} is not valid`);
        }
    }

}