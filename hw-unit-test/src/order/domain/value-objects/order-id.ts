import IdentifierValueObject from "../../../../../src/shared/domain/value-objects/identifier-value-object";

export default class OrderId extends IdentifierValueObject{
    constructor(orderId: string){
        super(orderId)
    }

    public static from(orderId: string){
        return new OrderId(orderId)
    }
}