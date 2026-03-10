import type ProductRepository from "../ports/product-repository";
import Product from "../../domain/Product";
import { inject, injectable } from "inversify";
import { TYPES } from "../../infrastructure/types";
import type TranslatorService from "../ports/translator-service";


@injectable()
export default class SaveProduct{

    constructor(@inject(TYPES.ProductRepository) private repository: ProductRepository, @inject(TYPES.TranslateService) private translateService: TranslatorService){
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

        const newName = String(await this.translateService.translate(name))

        const newProduct = Product.build(id, newName, baseUnit, presentations)

        await this.repository.save(newProduct)

    }
}