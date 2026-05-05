import { Container } from "inversify";
import ProductRepository from "../../application/ports/product-repository";
import OrderRepository from "../../application/ports/order-repository";
import InMemoryLocalProductRepository from "./inmemory-product-repository";
import InMemoryLocalOrderRepository from "./inmemory-order-repository";
import { TYPES } from "./types";
import Handler from "../../application/use-cases/handle";

const container = new Container()

const USE = 'test'

if (USE === 'test'){
    container.bind<OrderRepository>(TYPES.orderRepository).to(InMemoryLocalOrderRepository).inSingletonScope()
    container.bind<ProductRepository>(TYPES.productRepository).to(InMemoryLocalProductRepository).inSingletonScope()
}

container.bind<Handler>(TYPES.handler).to(Handler)

export default container

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