import IdentifierValueObject from "../../../../../src/shared/domain/value-objects/identifier-value-object"

export default class CustomerId extends IdentifierValueObject{
    constructor(id: string){
        super(id)
    }

    public static from(id: string): string{
        const customerId = new CustomerId(id)
        return customerId.getValue()
    }
}