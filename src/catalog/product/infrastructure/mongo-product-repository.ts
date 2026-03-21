import Product from "../domain/Product";
import ProductRepository from "../application/ports/product-repository";
import { ProductModel } from "./Product";
import { connectDB, disconnectDB } from "../../../shared/persistence/db";
import { injectable } from "inversify";

@injectable()
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

        console.log(`Producto Creado Exitosamente: \n${productDb}`)

        await disconnectDB()
    }

    async update(id: string, productData: { name?: string; baseUnit?: string; }): Promise<void> {
        await connectDB()

        const updatedProduct = await ProductModel.findByIdAndUpdate(id, {product_name: productData.name, product_base_unit: productData.baseUnit}, {new: true})

        console.log(`Producto Actualizado Exitosamente: \n${updatedProduct}`)

        await disconnectDB()
    }
}