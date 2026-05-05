import container from "../../../../src/order/domain/infrastructure/container";
import { TYPES } from "../../../../src/order/domain/infrastructure/types";

import ProductRepository from "../../../../src/order/application/ports/product-repository";
import OrderRepository from "../../../../src/order/application/ports/order-repository";

import HandlerMother from "./handle.mother";
import Handler from "../../../../src/order/application/use-cases/handle";
import { PlaceOrderCommand } from "../../../../src/order/application/use-cases/handle";

import OrderId from "../../../../src/order/domain/value-objects/order-id";

import { ProductNotFoundError } from "../../../../src/order/domain/errors/product-error";

describe('PlaceOrderHandler', () => {
    let handler = container.get<Handler>(TYPES.handler)
    let productRepo = container.get<ProductRepository>(TYPES.productRepository)
    let orderRepo = container.get<OrderRepository>(TYPES.orderRepository)

    it('creates order with items and saves', () => {
        productRepo.addProduct(HandlerMother.createTestProduct('550e8400-e29b-41d4-a716-446655440001', 10.00));
        productRepo.addProduct(HandlerMother.createTestProduct('550e8400-e29b-41d4-a716-446655440002', 20.00));

        const command: PlaceOrderCommand = {
            customerId: '550e8400-e29b-41d4-a716-446655440003',
            items: [
            { productId: '550e8400-e29b-41d4-a716-446655440001', quantity: 2 },
            { productId: '550e8400-e29b-41d4-a716-446655440002', quantity: 1 },
            ],
            };

        const orderId = handler.handle(command);
        expect(orderId).toBeDefined();
        const savedOrder = orderRepo.findById(OrderId.from(orderId).getValue());
        expect(savedOrder).not.toBeNull();
        expect(savedOrder!.items).toHaveLength(2);
        expect(savedOrder!.total).toBe(40); // 2*10 + 1*20
    });

    it('throws when product not found', () => {
        const command: PlaceOrderCommand = {
            customerId: '550e8400-e29b-41d4-a716-446655440003',
            items: [{ productId: '550e8400-e29b-41d4-a716-446655440004', quantity: 1 }],
            };

        expect(() => handler.handle(command)).toThrow(ProductNotFoundError);
    });

    // it('rolls back on error', async () => {
    //     productRepo.addProduct(HandlerMother.createTestProduct('550e8400-e29b-41d4-a716-446655440001', 10.00));
    //     orderRepo.simulateErrorOnSave();
    //     const command: PlaceOrderCommand = {
    //         customerId: '550e8400-e29b-41d4-a716-446655440003',
    //         items: [{ productId: '550e8400-e29b-41d4-a716-446655440001', quantity: 1 }],
    //         };

    //     await expect(handler.handle(command)).rejects.toThrow();
    //     expect(orderRepo.savedOrders).toHaveLength(0)
    // });
});