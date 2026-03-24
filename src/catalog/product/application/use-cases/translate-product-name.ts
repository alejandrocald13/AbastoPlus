import Product from "../../domain/Product";
import { inject, injectable } from "inversify";
import { TYPES } from "../../infrastructure/types";
import type TranslatorService from "../ports/translator-service";
import type ProductRepository from "../ports/product-repository";

@injectable()
export default class TranslateProductName{

    constructor(@inject(TYPES.TranslateService) private translateService: TranslatorService,
    @inject(TYPES.ProductRepository) private productRepository: ProductRepository){
    }

    async run(event: any): Promise<void> {

        const payload = event.payload
        const id = payload.id
        const spanishName = payload.name

        const translatedName = String(await this.translateService.translate(spanishName))

        await this.productRepository.update(id, {name: translatedName})
    }
}