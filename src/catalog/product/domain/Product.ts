import ProductId from "./value-objects/product-id";
import ProductName from "./value-objects/product-name";
import ProductBaseUnits from "./value-objects/product-base-unit";
import ProductPresentations from "./value-objects/product-presentations";

export default class Product{
    private readonly productId: ProductId
    private readonly productName: ProductName
    private readonly productBaseUnit: ProductBaseUnits
    private readonly productPresentations: ProductPresentations

    constructor(productId: ProductId, productName: ProductName, 
        productBaseUnit: ProductBaseUnits, productPresentations: ProductPresentations){
        this.productId = productId
        this.productName = productName
        this.productBaseUnit = productBaseUnit
        this.productPresentations = productPresentations
    }

    public static build(id: string, name: string, baseUnit: string, 
        presentations: {
            id: string;
            name: string;
            type: string;
            netQuantity: number;
            unitOfMeasure: string;
        }[]
    ): Product {
        const productId = new ProductId(id)
        const productName = new ProductName(name)
        const productBaseUnit = new ProductBaseUnits(baseUnit)
        const productPresentations = new ProductPresentations(presentations, baseUnit)

        const newProduct = new Product(productId, productName, productBaseUnit, productPresentations)

        return newProduct
    }




}