import { Container } from "inversify";
import MongoProductRepository from "./mongo-product-repository";
import SaveProduct from "../application/use-cases/product-save";
import ProductRepository from "../application/ports/product-repository";
import { TYPES } from "./types";
import TranslatorService from "../application/ports/translator-service";
// import TranslateMyMemory from "./mymemory-translator";
import TranslateGoogleFree from "./googlefree-translator";
import ProductNameTranslate from "../application/use-cases/product-name-translate";

const container = new Container();

const USE = 'MongoDb'

if (USE == 'MongoDb'){
    container.bind<ProductRepository>(TYPES.ProductRepository).to(MongoProductRepository).inSingletonScope()
} 
// else {
    // container.bind<ProductRepository>(TYPES.ProductRepository).to(PostgresSQLRepository).inSingletonScope()
// }

container.bind<SaveProduct>(TYPES.ProductService).to(SaveProduct)

const USE_TRANSLATOR = 'GoogleFree'

if (USE_TRANSLATOR == 'GoogleFree'){
    container.bind<TranslatorService>(TYPES.TranslateService).to(TranslateGoogleFree).inTransientScope()
}


container.bind<ProductNameTranslate>(TYPES.ProductNameTranslate).to(ProductNameTranslate)

export default container;