import { eventBusData , EventBus } from "../../../shared/domain/ports/eventBus"
import TranslateProductName from "../application/use-cases/translate-product-name"
import container from "./container"
import { TYPES } from "./types"

export interface EventSubscriber {
    run(event: eventBusData<any>): Promise<void> | void
}

export default class InMemoryEventBus implements EventBus{
    public events: eventBusData<any>[]
    
    private suscribers: Map<string, EventSubscriber[]>
    
    constructor(){
        this.events = []

        this.suscribers = new Map([
            ["catalog.product_created", [
                container.get<TranslateProductName>(TYPES.TranslateProductName)
            ]],
            ["shop.sale_created", [

            ]],
        ])
    }

    publish<T>(event: eventBusData<T>): void {
        this.events.push(event)
    }

    async consume(key: string, limit: number): Promise<void> {
        let processed = 0
        let index = 0

        while (index < this.events.length && processed < limit) {
            const event = this.events[index]!

            if (event.key !== key) {
                index += 1
                continue
            }

            const suscribers = this.suscribers.get(key) || []

            for (const suscriber of suscribers){
                await suscriber.run(event)
            }

            this.events.splice(index, 1)
            processed += 1
        }
    }
}