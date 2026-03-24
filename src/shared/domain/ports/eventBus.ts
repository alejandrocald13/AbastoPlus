export interface eventBusData<T>{
    key: string,
    ocurred_at: Date,
    payload: T
}

export interface EventBus{
    publish<T>(eventBusData: eventBusData<T>): void
    consume(key: string, limit: number): void
}