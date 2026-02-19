import IntValueObject from "../../../../../shared/domain/value-objects/int-value-object";

export default class PresentationNetQuantity extends IntValueObject{
    constructor(value: number){
        super(value)
    }
}