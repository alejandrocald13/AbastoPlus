import OrderRepository from "../../application/ports/order-repository";
import { Order } from "../order";

export default class InMemoryLocalOrderRepository implements OrderRepository{
    private orders: Array<Order>

    constructor() {
        this.orders = [];
    }

    findById(id: string): Order | null {
        for (const order of this.orders){
            if (order.orderId.getValue() === id){
                return order
            }
        }

        return null
    }

    addOrder(order: Order): void{
        this.orders.push(order)
    }
}