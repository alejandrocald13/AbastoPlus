import { Order } from "../../../../src/order/domain/order";
import CustomerId from "../../../../src/order/domain/value-objects/order-customer-id";
import Money from "../../../../src/order/domain/entities/money";
import OrderQuantity from "../../../../src/order/domain/value-objects/order-quantity";
import ProductId from "../../../../src/order/domain/value-objects/product-id";

export default class OrderMother{
    public static draft(): Order{
        const newOrder = Order.create(CustomerId.from('550e8400-e29b-41d4-a716-446655440000'))

        return newOrder
    }

    public static cancelled(): Order{
        const newOrder = Order.create(CustomerId.from('550e8400-e29b-41d4-a716-446655440000'))

        newOrder.cancel('Test cancellation')

        return newOrder
    }

    public static create(customerId: string): Order{
        const newOrder = Order.create(CustomerId.from(customerId))

        return newOrder
    }

    public static withItems(n=1): Order{
        const totalItems = n ?? Math.floor(Math.random() * 5) + 1;

        const order = Order.create(CustomerId.from("550e8400-e29b-41d4-a716-446655440000"));

        for (let i = 0; i < totalItems; i++) {
            const productId = ProductId.from("550e8400-e29b-41d4-a716-446655440001");

            const randomPrice = Number((Math.random() * 100 + 1).toFixed(2));
            const price = Money.create(randomPrice, "USD");

            const randomQuantity = Math.floor(Math.random() * 10) + 1;
            const quantity = OrderQuantity.create(randomQuantity);

            order.addItem(productId, quantity, price);
        }

        return order;
    }
}