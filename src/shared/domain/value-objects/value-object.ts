export default class ValueObject<T>{
    private value: T

    constructor(value: T){
        this.value = value
    }

    public toString(): string{
        return String(this.value)
    }
}