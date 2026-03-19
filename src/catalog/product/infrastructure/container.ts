import { Container } from "inversify";
import { TYPES } from "./types";
import MongoProductRepository from "./mongo-product-repository";
import SaveProduct from "../application/use-cases/product-save";
import ProductRepository from "../application/ports/product-repository";
import TranslatorService from "../application/ports/translator-service";
import TranslateGoogleFree from "./googlefree-translator";
import inMemoryEventBus from "./inMemoryEventBus";
import { EventBus } from "../../../shared/domain/ports/eventBus";

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

const USE_EVENT_BUS = 'inMemory'

if (USE_EVENT_BUS == 'inMemory'){
    container.bind<EventBus>(TYPES.EventBus).to(inMemoryEventBus).inSingletonScope()
}




export default container;

/*
| Transient:
| - nueva instancia SIEMPRE
| - no comparte nada
|
| Singleton:
| - una sola instancia global en ese contenedor
| - todos comparten la misma
|
| Request:
| - una instancia por resolución del contenedor
| - se comparte solo dentro de esa resolución
|
*/