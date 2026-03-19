import type ProductRepository from "../ports/product-repository";
import Product from "../../domain/Product";
import { inject, injectable } from "inversify";
import { TYPES } from "../../infrastructure/types";
import { type EventBus } from "../../../../shared/domain/ports/eventBus";

type SaveProductPayload = {
    id: string,
    name: string
}

@injectable()
export default class SaveProduct{

    constructor(@inject(TYPES.ProductRepository) private repository: ProductRepository, @inject(TYPES.EventBus) private eventBus: EventBus){
    }

    async run(id: string, name: string, baseUnit: string, 
        presentations: {
            id: string;
            name: string;
            type: string;
            netQuantity: number;
            unitOfMeasure: string;
        }[]
    ): Promise<void> {

        const newProduct = Product.build(id, name, baseUnit, presentations)

        // const saveProduct = await this.repository.save(newProduct)

        const eventBusData = {event: "catalog.product_created", payload: {id, name}}

        this.eventBus.publish<SaveProductPayload>(eventBusData)
    }
}