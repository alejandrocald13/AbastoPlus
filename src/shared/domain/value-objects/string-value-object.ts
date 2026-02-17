import ValueObject from "./value-object";

export class StringValueObject extends ValueObject<string> {
    
    constructor(value: string) {
        super(value);
        
        this.ensureValueIsStr(value)

    }

    private ensureValueIsStr(value: string){
        if (typeof(value) != "string"){
            throw new Error("Value not string")
        }
    }

}