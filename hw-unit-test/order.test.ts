import {Order, OrderStatus} from "./order"
import CustomerId from "./order-customer-id"

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
})