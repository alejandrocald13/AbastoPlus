import ValueObject from "./value-object";

export default class IntValueObject extends ValueObject<number> {
    
    constructor(value: number) {
        super(value);
        this.ensureValueIsInt(value)
    }

    private ensureValueIsInt(value: number){
        if (typeof(value) != "number"){
            throw new Error("Value not int")
        }
    }

}