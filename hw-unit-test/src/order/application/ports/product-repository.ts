import Product from "../../domain/entities/product"

export default interface ProductRepository{
    addProduct(product: Product): void
    existsById(productId: string): Product | null
}