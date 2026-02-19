import StringValueObject from "../../../../../shared/domain/value-objects/string-value-object";

export default class PresentationName extends StringValueObject{
    constructor(name: string){
        super(name, 1)
    }
}