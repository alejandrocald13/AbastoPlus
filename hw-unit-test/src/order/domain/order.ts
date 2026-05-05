import Money from "./entities/money";
import CustomerId from "./value-objects/order-customer-id";
import { InvalidOrderStateError, InvalidQuantityError } from "./errors/order-error";
import OrderQuantity from "./value-objects/order-quantity";
import ProductId from "./value-objects/product-id";
import OrderId from "./value-objects/order-id";

export enum OrderStatus {
    Draft,
    Completed,
    Cancelled
}

type OrderItem = {
    productId: ProductId;
    quantity: OrderQuantity;
    price: Money;
};

export class Order{
    public orderId: OrderId
    public customerId: CustomerId
    public status: OrderStatus
    public items: OrderItem[]
    public reasonCancelled: string | null = null
    public total: number

    constructor(orderId: OrderId, customerId: CustomerId, status: OrderStatus, items: []){
        this.orderId = orderId
        this.customerId = customerId
        this.status = status
        this.items = items
        this.total = 0
    }

    public static create(orderId: string, customerId: string): Order{
        const newOrderId = new OrderId(orderId)
        const newCustomerId = new CustomerId(customerId)
        return new Order(newOrderId, newCustomerId, OrderStatus.Draft, [])
    }

    public addItem(productId: ProductId, quantity: OrderQuantity, price: Money){

        if (this.status === OrderStatus.Cancelled){
            throw new InvalidOrderStateError('The order is already cancelled')
        }

        if (quantity.getValue() <= 0) {
            throw new InvalidQuantityError('The product quantity is invalid ')
        }

        for (const item of this.items){
            if (productId.getValue() === item.productId.getValue()){
                const newQuantity = OrderQuantity.create(item.quantity.getValue() + quantity.getValue())
                item.quantity = newQuantity
                this.calculateTotal()
                return
            }
        }
        
        this.items.push({"productId": productId, "quantity": quantity, "price": price})

        this.calculateTotal()
    }

    public cancel(reason: string){
        this.status = OrderStatus.Cancelled
        this.reasonCancelled = reason
    }

    public calculateTotal(): void{
        let newTotal = 0

        for (const item of this.items){
            newTotal = newTotal + (item.price.amount * item.quantity.getValue())
        }

        this.total = newTotal
    }
}