import EnumValueObject from "../../../../shared/domain/value-objects/enum-value-object";

export default class ProductBaseUnits extends EnumValueObject{
    constructor(value: string, validValues: string[]){
        super(value, validValues)
    }
}