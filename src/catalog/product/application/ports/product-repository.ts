import Product from "../../domain/Product"




export default interface ProductRepository{
    save(data: Product): Promise<void>
}