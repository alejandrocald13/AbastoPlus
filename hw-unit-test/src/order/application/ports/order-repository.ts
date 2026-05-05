import { Order } from "../../domain/order";

export default interface OrderRepository{
    findById(id: string): Order | null
    addOrder(order: Order): void
}