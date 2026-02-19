import IdentifierValueObject from "../../../../../shared/domain/value-objects/identifier-value-object";

export default class PresentationId extends IdentifierValueObject{
    
    constructor(presentationId: string){
        super(presentationId)
    }

}