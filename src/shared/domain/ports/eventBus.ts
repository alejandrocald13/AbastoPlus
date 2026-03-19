export interface eventBusData<T>{
    event: string
    payload: T
}

export interface EventBus{
    publish<T>(eventBusData: eventBusData<T>): void
}