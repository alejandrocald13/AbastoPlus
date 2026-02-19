import ProductId from "./value-objects/product-id";
import ProductName from "./value-objects/product-name";
import ProductBaseUnits from "./value-objects/product-base-unit";

export default class Product{
    private readonly productId: ProductId
    private readonly productName: ProductName
    private readonly productBaseUnit: ProductBaseUnits

    constructor(productId: ProductId, productName: ProductName, productBaseUnit: ProductBaseUnits){
        this.productId = productId
        this.productName = productName
        this.productBaseUnit = productBaseUnit
    }

    public static build(id: string, name: string, baseUnit: string): Product{
        const productId = new ProductId(id)
        const productName = new ProductName(name)
        const productBaseUnit = new ProductBaseUnits(baseUnit)

        const newProduct = new Product(productId, productName, productBaseUnit)

        return newProduct
    }
}