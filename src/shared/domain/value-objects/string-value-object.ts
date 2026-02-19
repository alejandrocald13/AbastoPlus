import ValueObject from "./value-object";

export default class StringValueObject extends ValueObject<string> {

    private lengthAccepted: number
    
    constructor(value: string, lengthAccepted: number) {
        super(value);
        
        this.lengthAccepted = lengthAccepted
        
        this.ensureValueIsStr(value)

    }

    private ensureValueIsStr(value: string){
        if (value.length < this.lengthAccepted){
            throw new Error(`String must be at least ${this.lengthAccepted} characters`)
        }
    }

}