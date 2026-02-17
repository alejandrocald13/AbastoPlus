import ValueObject from "./value-object";

export default class IdentifierValueObject extends ValueObject<string>{

    constructor(value: string){
        super(value)

        this.ensureValueIsUuid(value)
    }

    private ensureValueIsUuid(uuid: string){
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        if (!uuidRegex.test(uuid)){
            throw new Error("Uuid invalid")
        }

        // Examples:
        // console.log(isValidUUID("550e8400-e29b-41d4-a716-446655440000")); // true
        // console.log(isValidUUID("invalid-uuid-format")); // false
    }
}