import ProductRepository from "../../application/ports/product-repository";
import Product from "../entities/product";

export default class InMemoryLocalProductRepository implements ProductRepository{
    private products: Array<Product>

    constructor() {
        this.products = [];
    }

    addProduct(product: Product): void {
        this.products.push(product)
    }

    existsById(id: string): Product | null{
        for (const product of this.products){
            if (product.productId.getValue() === id){
                return product
            }
        }
        return null
    }
}