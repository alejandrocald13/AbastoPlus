import CustomerId from "./order-customer-id";

export enum OrderStatus {
    Draft,
    Completed,
    Cancelled
}

export class Order{
    public customerId: CustomerId
    public status: OrderStatus
    public items: []

    constructor(customerId: CustomerId, status: OrderStatus, items: []){
        this.customerId = customerId
        this.status = status
        this.items = items
    }

    public static create(customerId: string): Order{
        const newCustomerId = new CustomerId(customerId)
        return new Order(newCustomerId, OrderStatus.Draft, [])
    }
}