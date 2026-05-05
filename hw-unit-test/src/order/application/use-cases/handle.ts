import { injectable, inject } from "inversify";
import { TYPES } from "../../domain/infrastructure/types";
import type OrderRepository from "../ports/order-repository";
import type ProductRepository from "../ports/product-repository";
import { Order } from "../../domain/order";
import ProductId from "../../domain/value-objects/product-id";
import OrderQuantity from "../../domain/value-objects/order-quantity";
import OrderMother from "../../../../test/order/domain/mothers/order-mother";
import { ProductNotFoundError } from "../../domain/errors/product-error";

type Items = {
    productId: string
    quantity: number
}

export type PlaceOrderCommand = {
    customerId: string,
    items: Items[]
}

@injectable()
export default class Handler{
    constructor(@inject(TYPES.orderRepository) private orderRepository: OrderRepository, 
    @inject(TYPES.productRepository) private productResposity: ProductRepository){
    }

    handle(command: PlaceOrderCommand): string{
        try {            
            const order = Order.create(OrderMother.generateUuid(), command.customerId)

            for (const item of command.items){

                const productInRepo = this.productResposity.existsById(item.productId)


                if (productInRepo === null){
                    throw new ProductNotFoundError('Product Not Found')
                } else {

                    const productId = ProductId.from(item.productId)
                    const quantity = OrderQuantity.create(item.quantity)
                    const price = productInRepo.price

                    order.addItem(productId, quantity, price)
                }
            }

            this.orderRepository.addOrder(order)

            return order.orderId.getValue()

        } catch (error) {
            throw error
        }
    }
}