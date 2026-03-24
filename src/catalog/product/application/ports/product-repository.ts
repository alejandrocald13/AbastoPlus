import Product from "../../domain/Product"



type ProductData = {
    name?: string,
    baseUnit?: string
}

export default interface ProductRepository{
    save(data: Product): Promise<void>
    update(id: string, productData: ProductData): Promise<void>
}