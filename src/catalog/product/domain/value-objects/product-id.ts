import IdentifierValueObject from "../../../../shared/domain/value-objects/identifier-value-object";


export default class ProductId extends IdentifierValueObject{
    
    constructor(productId: string){
        super(productId)
    }

}