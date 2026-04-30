import IdentifierValueObject from "../../../../../src/shared/domain/value-objects/identifier-value-object";

export default class ProductId extends IdentifierValueObject{
    constructor(uuid: string){
        super(uuid)
    }

    public static from(uuid: string): ProductId{
        return new ProductId(uuid)
    }
}