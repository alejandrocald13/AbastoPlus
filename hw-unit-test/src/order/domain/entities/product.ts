import OrderQuantity from "../value-objects/order-quantity";
import ProductId from "../value-objects/product-id";
import Money from "./money";

export default class Product {
    public productId: ProductId
    public quantity: OrderQuantity
    public price: Money

    constructor(productId: ProductId, quantity: OrderQuantity, price: Money){
        this.productId = productId
        this.quantity = quantity
        this.price = price
    }

    public static create(productId: string, quantity: number, price: number, currency: string){
        const newProductId = ProductId.from(productId)
        const newQuantity = new OrderQuantity(quantity)
        const newPrice = Money.create(price, currency)

        return new Product(newProductId, newQuantity, newPrice)
    }
}