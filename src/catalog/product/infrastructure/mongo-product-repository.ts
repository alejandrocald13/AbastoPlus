import Product from "../domain/Product";
import ProductRepository from "../application/product-repository";
import { ProductModel } from "./Product";
import { connectDB, disconnectDB } from "../../../shared/persistence/db";


export default class MongoProductRepository implements ProductRepository{
    async save(data: Product): Promise<void> {

        await connectDB()

        const product = data
        const presentations = []

        for (const presentation of product.getProductPresentations()){
            presentations.push({_id: presentation.id, presentation_name: presentation.name,
                presentation_type: presentation.type, presentation_net_quantity: presentation.netQuantity,
                presentation_unit_of_measure: presentation.unitOfMeasure
            })
        }

        const productDb = await ProductModel.create({
            _id: product.getId(),
            product_name: product.getName(),
            product_base_unit: product.getBaseUnit(),
            presentations: presentations
        })

        console.log(productDb)

        await disconnectDB()
    }
}