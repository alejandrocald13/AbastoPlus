import { Container } from "inversify";
import MongoProductRepository from "./mongo-product-repository";
import SaveProduct from "../application/use-cases/product-save";
import ProductRepository from "../application/product-repository";
import { TYPES } from "./types";

const container = new Container();

const USE = 'MongoDb'

if (USE == 'MongoDb'){
    container.bind<ProductRepository>(TYPES.ProductRepository).to(MongoProductRepository).inSingletonScope()
} 
// else {
    // container.bind<ProductRepository>(TYPES.ProductRepository).to(PostgresSQLRepository).inSingletonScope()
// }

container.bind<SaveProduct>(TYPES.ProductService).to(SaveProduct)

export default container;