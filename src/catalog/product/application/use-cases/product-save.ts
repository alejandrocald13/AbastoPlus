import type ProductRepository from "../product-repository";
import Product from "../../domain/Product";
import { inject, injectable } from "inversify";
import { TYPES } from "../../infrastructure/types";


@injectable()
export default class SaveProduct{

    constructor(@inject(TYPES.ProductRepository) private repository: ProductRepository){
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

        await this.repository.save(newProduct)

    }
}