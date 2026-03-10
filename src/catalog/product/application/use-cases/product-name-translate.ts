import { inject, injectable } from "inversify";
import type TranslatorService from "../ports/translator-service";
import { TYPES } from "../../infrastructure/types";

@injectable()
export default class ProductNameTranslate{

    constructor(@inject(TYPES.TranslateService) private translateService: TranslatorService){
    }

    async run(text: string): Promise<String> {
        return this.translateService.translate(text)
    }
}