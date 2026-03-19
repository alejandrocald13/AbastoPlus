import { eventBusData , EventBus } from "../../../shared/domain/ports/eventBus"

export default class inMemoryEventBus implements EventBus{
    public events: eventBusData<any>[]
    
    private suscribers: {
        "catalog.product_created": [],
        "shop.sale_created": [],
    }

    constructor(){
        this.events = []
    }

    publish<T>(event: eventBusData<T>): void {
        this.events.push(event)
    }
}