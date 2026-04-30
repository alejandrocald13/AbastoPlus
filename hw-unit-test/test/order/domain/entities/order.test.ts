import Money from "../../../../src/order/domain/entities/money"
import { Order, OrderStatus } from "../../../../src/order/domain/order"
import CustomerId from "../../../../src/order/domain/value-objects/order-customer-id"
import OrderMother from "../mothers/order-mother"
import OrderQuantity from "../../../../src/order/domain/value-objects/order-quantity"
import ProductId from "../../../../src/order/domain/value-objects/product-id"
import { InvalidOrderStateError, InvalidQuantityError } from "../../../../src/order/domain/errors/order-error"

describe('Order', () => {
    describe('create', () => {
        it('creates order with draft status', () => {
            const customerId = CustomerId.from('550e8400-e29b-41d4-a716-446655440000')
            
            const order = Order.create(customerId)

            expect(order.status).toBe(OrderStatus.Draft)
            expect(order.customerId.getValue()).toEqual(customerId)
            expect(order.items).toHaveLength(0)
        })
    })

    describe('addItem', () => {
        it('adds items to order', () => {
            const order = OrderMother.draft()

            const productId = ProductId.from('550e8400-e29b-41d4-a716-446655440001')
            const quantity = OrderQuantity.create(2)
            const price = Money.create(10.00, 'USD');

            order.addItem(productId, quantity, price)

            expect(order.items).toHaveLength(1)
            expect(order.items[0]!.productId).toEqual(productId)
            expect(order.items[0]!.quantity).toEqual(quantity)
        })

        it('increases quantity for existing product', () =>{
            const order = OrderMother.draft()
            
            const productId = ProductId.from('550e8400-e29b-41d4-a716-446655440001')
            const price = Money.create(10.00, 'USD');

            order.addItem(productId, OrderQuantity.create(2), price)
            order.addItem(productId, OrderQuantity.create(3), price)

            expect(order.items).toHaveLength(1)
            expect(order.items[0]!.quantity.getValue()).toBe(5)
        })

        it('throws when order is cancelled', () =>{
            const order = OrderMother.cancelled()

            expect(() => {
                order.addItem(ProductId.from('550e8400-e29b-41d4-a716-446655440002'), OrderQuantity.create(1),
            Money.create(10.00, 'USD'));
            }).toThrow(InvalidOrderStateError)
        })

        it('throws when quantity is zero', () => {
            const order = OrderMother.draft()

            expect(() => {
                order.addItem(ProductId.from('550e8400-e29b-41d4-a716-446655440002'), OrderQuantity.create(0),
            Money.create(10.00, 'USD'));
            }).toThrow(InvalidQuantityError)
        })
    })
})