import IntValueObject from "../../../../../src/shared/domain/value-objects/int-value-object";

export default class OrderQuantity extends IntValueObject{
    constructor(int: number){
        super(int)
    }

    public static create(int: number){
        return new OrderQuantity(int)
    }
}