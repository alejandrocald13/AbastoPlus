import EnumValueObject from "../../../../shared/domain/value-objects/enum-value-object";

export default class ProductBaseUnits extends EnumValueObject{
    constructor(value: string){
        super(value, ['Kg', 'g', 'lb', 'ml', 'lt', 'unidad'])
    }
}