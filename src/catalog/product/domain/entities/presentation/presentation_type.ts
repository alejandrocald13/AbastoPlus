import EnumValueObject from "../../../../../shared/domain/value-objects/enum-value-object";

export default class PresentationType extends EnumValueObject{
    constructor(value: string){
        super(value, ['bag', 'sack', 'box', 'can', 'jar', 'bottle'])
    }
}