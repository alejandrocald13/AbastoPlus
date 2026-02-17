import StringValueObject from "../../../../shared/domain/value-objects/string-value-object"

export default class ProductName extends StringValueObject{
    constructor(name: string){
        super(name)
    }
}

