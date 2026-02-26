import ProductRepository from "../product-repository";
import Product from "../../domain/Product";

export default class SaveProduct{
    private readonly repository: ProductRepository

    constructor(repository: ProductRepository){
        this.repository = repository
    }

    public run(id: string, name: string, baseUnit: string, 
        presentations: {
            id: string;
            name: string;
            type: string;
            netQuantity: number;
            unitOfMeasure: string;
        }[]
    ): void {
        const newProduct = Product.build(id, name, baseUnit, presentations)

        this.repository.save(newProduct)

    }
}